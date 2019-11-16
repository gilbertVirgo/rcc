const BP = {
    xs: 300,
    sm: 600,
    md: 900,
    lg: 1200,
}

export const getBreakpoints = (innerWidth: number) => {
    let xs = false,
        sm = false,
        md = false,
        lg = false,
        xl = false;

    if (innerWidth >= BP.lg) xl = true;
    else if (innerWidth >= BP.md) lg = true;
    else if (innerWidth >= BP.sm) md = true;
    else if (innerWidth >= BP.xs) sm = true;
    else xs = true;

    return { xs, sm, md, lg, xl };
}