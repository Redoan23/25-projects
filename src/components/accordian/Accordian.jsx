import { useEffect, useState } from "react";


const Accordian = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('src/components/accordian/data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const [itemId, setItemId] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiSelection, setMultiSelection] = useState([])


    const handleMultiSelection = (getCurrentId) => {
        setMultiSelection(getCurrentId)
        let copyMultiple = [...multiSelection]
        const findIndexOfCurrentID = copyMultiple.indexOf(getCurrentId)
        if (findIndexOfCurrentID === -1) {
            copyMultiple.push(getCurrentId)
        }
        else {
            copyMultiple.splice(findIndexOfCurrentID, 1)
        }
        setMultiSelection(copyMultiple)
    }

    return (
        <div className=" w-[700px] mx-auto mt-12">
            <div>
                <h3
                    className=" text-3xl text-center font-semibold bg-emerald-600 w-1/2 text-white mx-auto rounded-md pb-1 cursor-pointer"
                    onClick={() => setEnableMultiSelection(!enableMultiSelection)}
                >
                    Enable Multi Selection
                </h3>
            </div>
            {
                data.length > 0 ? data.map(itemData =>
                    <div key={itemData.id}>
                        <div className=" flex gap-3 justify-center mt-5 py-2 bg-neutral-400"
                            onClick={
                                () => enableMultiSelection ?
                                    handleMultiSelection(itemData.id)
                                    :
                                    setItemId(itemId === itemData.id ? null : itemData.id)
                            }
                        >
                            <h4 className=" text-center">
                                {itemData.question}
                            </h4>
                            <p className=" text-center  ">+</p>
                        </div>
                        <div className=" bg-neutral-300">

                            {
                                enableMultiSelection ? multiSelection.indexOf(itemData.id) !== -1 && <div>{itemData.answer}</div>
                                    :
                                    itemData.id === itemId && <div>{itemData.answer}</div>
                            }

                        </div>
                    </div>
                )
                    :

                    <div>No Data found</div>
            }
        </div >
    );
};

export default Accordian;