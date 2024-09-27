import { useEffect, useState } from "react";


const ScrollIndicator = ({ url }) => {


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    console.log(data)

    const fetchData = async (getUrl) => {

        try {
            setLoading(true)
            const response = await fetch(getUrl)
            const result = await response.json()
            setData(result)
            setLoading(false)

        } catch (error) {
            console.log(error);
            setErrorMessage(error.message)
            setLoading(false)

        }
    }

    useEffect(() => {
        fetchData(url)
    }, [])

    return (
        <div>
            <div>
                <h3 className=" text-5xl text-center font-bold  text-emerald-800 mt-10 mb-3 py-5 w-full bg-orange-100">Products List</h3>
            </div>
            <div className=" flex flex-wrap" >
                {
                    data && data.length > 0 ? data.products.map(data =>
                        <div className=" border border-emerald-600 my-2 p-3 mx-auto w-96">
                            {data.title}
                        </div>
                    )
                        :
                        null
                }
            </div>
        </div>
    );
};

export default ScrollIndicator;