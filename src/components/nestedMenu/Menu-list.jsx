import MenuItems from "./menu-items";


const MenuList = ({ list }) => {
    console.log(list)
    return (
        <li className=" list-disc ">
            {
                list.label
            }
                        {
                list && list.length > 0 ?
                    list.map((list, i) =>
                        <MenuItems key={i} items={list}>a</MenuItems>
                    )
                    :
                    null
            }
        </li>
    );
};

export default MenuList;