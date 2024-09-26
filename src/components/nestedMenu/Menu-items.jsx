import { useState } from "react";
import MenuList from "./menu-list";


const MenuItems = ({ items = [] }) => {

    // const [showNavLink, setShowNavLink] = useState(false)
    const [showCUrrentChild, setShowCurrentChild] = useState({})

    const handleChildren = (getCurrentLabel) => {
        setShowCurrentChild({
            ...showCUrrentChild,
            [getCurrentLabel]: !showCUrrentChild[getCurrentLabel]
        }
        )
    }


    // we can do this in both way setting just a state or a bit complex one is the taking an empty object then toggling between true or false
    // for object we must remember that we can use the bracket method to get a child as like as the dot method.



    return (
        <ul>
            <p onClick={() => handleChildren(items.label)} className=" flex gap-3 justify-center">
                {items.label}
                {
                    items && items.children && items.children.length > 0 && <span className=" font-bold">
                        {
                            showCUrrentChild[items.label] ? '-' : '+'
                        }
                    </span>
                }
            </p>
            <div>
                {
                    items && items.children && items.children.length > 0 && showCUrrentChild[items.label] ? <MenuList lists={items.children} ></MenuList>

                        :
                        null
                }
            </div>

        </ul >
    );
};

export default MenuItems;