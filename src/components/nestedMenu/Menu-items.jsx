import { useState } from "react";
import MenuList from "./menu-list";


const MenuItems = ({ items = [] }) => {

    const [showNavLink, setShowNavLink] = useState(false)
    console.log(showNavLink);

    return (
        <ul>
            <p onClick={() => setShowNavLink(!showNavLink)}>{items.label}</p>
            <div>
                {
                    items && items.children && items.children.length > 0 ?

                        showNavLink === true && <MenuList lists={items.children} ></MenuList>

                        :
                        null
                }
            </div>

        </ul>
    );
};

export default MenuItems;