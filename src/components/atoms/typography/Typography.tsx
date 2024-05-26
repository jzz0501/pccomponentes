import { ReactNode } from "react";

export enum TypographyHeading {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6
}

type TypographyProperty = {
    children: ReactNode,
    heading: TypographyHeading
}

export default function Typography(property: TypographyProperty) {

    const {children, heading} = property

    switch(heading) {
        case TypographyHeading.H1: return <h1>{children}</h1>
        case TypographyHeading.H2: return <h2>{children}</h2>
        case TypographyHeading.H3: return <h3>{children}</h3>
        case TypographyHeading.H4: return <h3>{children}</h3>
        case TypographyHeading.H5: return <h3>{children}</h3>
        case TypographyHeading.H6: return <h3>{children}</h3>
    }
}