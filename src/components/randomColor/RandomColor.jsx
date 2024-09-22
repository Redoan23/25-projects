import { useEffect, useState } from "react";


const RandomColor = () => {



    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState('#000000')
    console.log(color)

    useEffect(() => {
        if (typeOfColor === 'hex') createRandomHexColor()
        else createRandomRgbColor()
    }, [typeOfColor])

    const randomColorUtility = (length) => {
        return Math.floor(Math.random() * length)
    }

    const createRandomHexColor = () => {
        const hexNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", 'D', "E", "F"]
        let hexColor = '#'
        for (let i = 0; i < 6; i++) {
            hexColor += hexNumber[randomColorUtility(hexNumber.length)]
            setColor(hexColor)
        }
    }
    const createRandomRgbColor = () => {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        const a = randomColorUtility(256);
        setColor(`rgba(${r},${g},${b},${a})`)
    }

    return (
        <div style={{
            width: '100vw',
            height: '100vw',
            background: color
        }}>
            <div style={{
                textAlign: 'center',
                margin: 'auto',
                display: 'flex',
                gap: '10px',
                justifyContent: 'center'
            }}>
                <button onClick={() => setTypeOfColor('hex')} className=" border bg-gray-100 px-2 hover:bg-gray-200">
                    Switch to Hex Color
                </button>
                <button onClick={() => setTypeOfColor('rgb')} className=" border bg-gray-100 px-2 hover:bg-gray-200">
                    Switch to RGB Color
                </button>
                <button onClick={typeOfColor === 'hex' ? createRandomHexColor : createRandomRgbColor} className=" border bg-gray-100 px-2 hover:bg-gray-200">
                    Generate Random Color
                </button>
            </div>
            <div className=" text-sm ml-3 bg-white w-36 text-center py-1">
                {color}

            </div>
        </div >
    );
};

export default RandomColor;