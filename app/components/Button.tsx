interface ButtonProps {
    variant?: "orange" | "blue" | "purple" | "dark" | "light",
    outline?: boolean,
    onClick?: VoidFunction,
    children?: any,
    style?: object
}

const Button = ({ variant, outline, onClick, children, style }: ButtonProps) => {
    return (
        <button
            data-variant={variant}
            onClick={onClick}
            style={style}
            className={"button " + (outline ? "outline" : "")}>
            {children}
        </button>
    )
}

export default Button;