import MenuItems from "./menu-items";


const MenuList = ({ lists }) => {

    return (
        <li className=" ml-10 ">
            {
                lists && lists.length > 0 ?
                    lists.map((list, i) =>
                        <MenuItems key={i} items={list}></MenuItems>
                    )
                    :
                    null
            }
        </li>
    );
};

export default MenuList;