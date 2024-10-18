import { useContext } from "react";
import { Button } from "react-bootstrap";

import { ThemeContext } from "../../services/themeContext/ThemeContext";
import useTranslation from "../../custom/useTranslation/useTranslation";



const ToggleTheme = () => {
    const { theme, handleToggleTheme } = useContext(ThemeContext);

    const translate = useTranslation();

    return (
        <Button onClick={() => handleToggleTheme(theme === "LIGHT" ? "DARK" : "LIGHT")} className="my-3">
            {theme === "LIGHT" ? translate("dark_theme_change") : translate("light_theme_change")}
        </Button>
    );
};

export default ToggleTheme;
