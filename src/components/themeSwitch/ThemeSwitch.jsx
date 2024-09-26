
import useLocalStorage from "../../Hooks/useLocalStorage";
import './theme.css'

const ThemeSwitch = () => {


    const [theme, setTheme] = useLocalStorage('theme', 'dark')

    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <div className=" themeContainer" data-theme={theme}>
            <div className=" switchHolder">
                <h3 className=" text-4xl heading-text">Beautiful World!</h3>
                <button
                    className=" border p-2 rounded-lg btn"
                    onClick={handleTheme}
                >
                    Change Theme
                </button>
            </div>
        </div>
    );
};

export default ThemeSwitch;