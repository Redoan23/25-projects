import { useState } from "react";
import MenuList from "./menu-list";


const MenuItems = ({ items = [] }) => {

    const [showNavLink, setShowNavLink] = useState(false)
    const [showCUrrentChild, setShowCurrentChild] = useState({})
    console.log(showNavLink);

    return (
        <ul>
            <p onClick={() => setShowNavLink(!showNavLink)} className=" flex gap-3 justify-center">
                {items.label}
                {
                    items && items.children && items.children.length > 0 && <span className=" font-bold">+</span>
                }
            </p>
            <div>
                {
                    items && items.children && items.children.length > 0 ?

                        showNavLink === true && <MenuList lists={items.children} ></MenuList>

                        :
                        null
                }
            </div>

        </ul >
    );
};

export default MenuItems;