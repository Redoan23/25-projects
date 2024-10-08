import MenuItems from "./menu-items";


const NestedMenu = ({ menus = [] }) => {

    return (
        <div>
            {
                menus && menus.length ?
                    menus.map((menu, i) =>
                        <div key={i}>
                            <MenuItems items={menu}></MenuItems>
                        </div>
                    )
                    :
                    null
            }
        </div>
    );
};

export default NestedMenu;