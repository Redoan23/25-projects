import { useEffect, useState } from "react";


const ScrollIndicator = ({ url }) => {


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [scrollPercentage, setScrollPercentage] = useState(0)

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
    }, [url])


    const handleScrollPercentage = () => {
        // console.log(document.documentElement.scrollHeight, document.documentElement.clientHeight, document.documentElement.scrollTop);
        console.log('st', document.documentElement.scrollHeight);
        console.log('sh', document.documentElement.clientHeight);

        const scrolledAmount = document.documentElement.scrollTop

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        // console.log(height);

        const scrolledAmountPercentage = ((scrolledAmount / height) * 100)
        setScrollPercentage(scrolledAmountPercentage)

    }


    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage)

        return () => {
            window.removeEventListener('scroll', () => { })
        }
    }, [])


    return (
        <div>
            <div>
                <h3 className=" text-5xl text-center font-bold  text-emerald-800 mt-10 mb-3 py-5 w-full bg-orange-100">Products List</h3>
            </div>
            <div className={` sticky top-0 w-full h-1`}>
                <div className={` bg-sky-800 h-full`} style={{width:`${scrollPercentage}%`}}>

                </div>
            </div>
            <div className=" flex flex-wrap" >
                {
                    data && data.products && data.products.length > 0 ? data.products.map((product, i) =>
                        <div key={i} className=" border border-emerald-600 my-2 p-3 mx-auto w-96">
                            {product.title}
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