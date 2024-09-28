import Tabs from "./Tabs";


const TabWrapper = () => {

    const tabArray = [
        {
            label: 'Tab 1',
            content: 'content of tab 1'
        },
        {
            label: 'Tab 2',
            content: 'content of tab 2'
        },
        {
            label: 'Tab 3',
            content: 'content of tab 3'
        },
    ]

    

    return (
        <div>
            <Tabs tabContents={tabArray}></Tabs>
        </div>
    );
};

export default TabWrapper;