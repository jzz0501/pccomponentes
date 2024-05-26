export enum TextSize {
    MEDIUM = "text-[16px]"
}

type TextProperty = {
    text: string
    size?: TextSize
}

export default function Text(property: TextProperty) {
    
    const {size, text} = property
    
    return (
        <div className={`${size}`}>{text}</div>
    )
}