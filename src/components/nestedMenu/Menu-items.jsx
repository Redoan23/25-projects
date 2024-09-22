import MenuList from "./menu-list";


const MenuItems = ({ items = [] }) => {

    return (
        <ul>
            <p>{items.label}</p>
            {
                items && items.children && items.children.length > 0 ?
                   
                        <MenuList list={items.children} ></MenuList>
                    
                    : null
            }
        </ul>
    );
};

export default MenuItems;