import React, { useState } from 'react'
import { colorsList } from './constants'
import { TickIcon } from '../../../../../assets/icons'

import { ColorWrapper } from './ColorWrapper.styled'

const ColorPicker = ({ handleResult }) => {
    const [selectedColors, setSelectedColors] = useState([]);

    const handleColorClick = (colorObj) => {
        if (selectedColors.includes(colorObj.code)) {
            setSelectedColors((prev) => prev.filter(c => c !== colorObj.code))
            handleResult(selectedColors.filter(c => c !== colorObj.code))
        } else {
            setSelectedColors((prev) => [...prev, colorObj.code])
            handleResult([...selectedColors, colorObj.code])
        }
    }

    return (
            <ColorWrapper>
                {colorsList.map(color => {
                    return (
                        <div
                            onClick={() => handleColorClick(color)}
                            className='color-item'
                            style={{
                                backgroundColor: color.code
                            }}
                            key={color.code}
                        >
                            {selectedColors.includes(color.code)
                                ? <TickIcon color={color.name === "White"
                                    ? "#000"
                                    : "#fff"} />
                                : null}
                        </div>
                    )
                })}
            </ColorWrapper>
    )
}

export default ColorPicker