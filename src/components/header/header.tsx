import "./header.scss";
import Toolbar, { Item } from "devextreme-react/toolbar";
import { useNavigate } from "react-router";
import { ItemClickEvent } from "devextreme/ui/toolbar_types";
import { useState } from "react";
import themes from "devextreme/ui/themes";

export default function Header() {
    const navigate = useNavigate();
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const link1Options = {
        text: "Page 1",
        onClick: () => {
            navigate("/sample-1");
        }
    };
    const link2Options = {
        text: "Page 2",
        onClick: () => {
            navigate("/sample-2");
        }
    };

    const colorModeSwitcherOptions = {
        icon: theme === "light" ? "moon" : "sun",
        onClick: () => {
            setTheme((currentTheme) => {
                const newTheme = currentTheme === "light" ? "dark" : "light";
                
                localStorage.setItem("theme", newTheme);
                themes.current(newTheme === "light" ? "fluent.saas.light" : "fluent.saas.dark");
                
                return newTheme;
            })
        }
    };

    const onToolbarItemClick = (e: ItemClickEvent<any, any>) => {  // eslint-disable-line
        if (e.itemIndex == 0 && e.itemData?.cssClass == "header-title") {
            navigate("/");
        }
    }

    return (
        <header className="header-component">
            <Toolbar className="header-toolbar" id="primary-header" onItemClick={e => onToolbarItemClick(e)} >
                <Item location="before" cssClass="header-title" locateInMenu="never" text="Sample project" />

                <Item location="before" widget="dxButton" options={link1Options} />
                <Item location="before" widget="dxButton" options={link2Options} />

                <Item location="after" widget="dxButton" options={colorModeSwitcherOptions} />
            </Toolbar>
        </header>
    )
}
