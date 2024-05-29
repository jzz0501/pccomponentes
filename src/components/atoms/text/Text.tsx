export enum TextSize {
    MEDIUM = "text-[16px]",
    LARGE = "text-[20px]"
}

export enum TextFont {
    BOLD = "font-bold"
}

export enum TextColor {
    RED = "text-red-700",
    GRAY = "text-gray-400"
}

type TextProperty = {
    text: string
    size?: TextSize,
    font?: TextFont,
    color?: TextColor,
    underline?: boolean
}

export default function Text(property: TextProperty) {
    
    const {size, text, font, color, underline} = property
    
    return (
        <div className={`${size} ${font} ${color} ${underline && "line-through"}`}>{text}</div>
    )
}