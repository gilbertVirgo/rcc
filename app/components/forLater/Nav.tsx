import React, { useEffect, useState } from "react";
import { getBreakpoints } from "../../functions";

const Item = ({ children }: { children: string }) => (
    <p className="item">{children}</p>
)

const Nav = () => {
    const [bp, setBp] = useState(getBreakpoints(window.innerWidth));
    const [active, setActive] = useState(false);

    useEffect(() => {
        const resize = () => setBp(getBreakpoints(window.innerWidth));

        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <div className="nav">
            <div className="bar">
                <img
                    className="logo"
                    src={require("../assets/logo.webp")} />
                <div className={`items ${active ? "active" : ""}`}>
                    <Item>About</Item>
                    <Item>Contact</Item>
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