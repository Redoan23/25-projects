import { useState } from "react";
import './tabs.css'

const Tabs = ({ tabContents = [] }) => {

    const [currentIndex, setCurrenIndex] = useState(0)


    return (
        <div>
            <div className='label-container'>
                {
                    tabContents && tabContents.length > 0 && tabContents.map((tab, index) =>
                        <div key={tab.label}
                            onClick={() => setCurrenIndex(index)}
                            className={`individual-label ${currentIndex === index ? 'activeTab' : 'inactiveTab'} ${onmouseover ? 'mouseOver' : ''}`} >
                            {tab.label}
                        </div>
                    )
                }
            </div>
            <div style={{ color: "red" }}>
                {
                    tabContents[currentIndex] && tabContents[currentIndex].content
                }
            </div>
        </div>
    );
};

export default Tabs;