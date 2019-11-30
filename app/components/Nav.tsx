import React from "react";
import Button from "./Button";

const Item = ({ children }: { children: string }) => (
    <p className="item">{children}</p>
)

const Nav = () => {
    const [active, setActive] = React.useState(false);

    return (
        <div className="nav">
            <div className="bar">
                <img
                    className="logo"
                    src="/assets/logo.png" />
                <div className={`items ${active ? "active" : ""}`}>
                    <Item>About</Item>
                    <Item>Contact</Item>
                    <Button outline variant="orange" style={{ marginLeft: "25px" }}>
                        Get in touch
                    </Button>
                </div>
                <button
                    className={"hamburger hamburger--squeeze " + (active ? "is-active" : "")}
                    type="button"
                    onClick={() => setActive(!active)}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Nav;