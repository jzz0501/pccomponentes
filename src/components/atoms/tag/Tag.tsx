export enum TagColor {
    BLUE = "bg-blue-700",
    ORANGE = "bg-orange-500"
}

export enum TagTextColor {
    WHITE = "text-white"
}

type TagProperty = {
    text: string,
    popText?: string,
    color?: TagColor,
    textColor?: TagTextColor,
}

export default function Tag(property: TagProperty) {

    const {color, textColor, text, popText} = property

    return (
        <div className="relative group flex">
            <div className={`${color} ${textColor} font-bold rounded-md px-[8px] py-[2px] text-[14px]`}>
                {text}
            </div>
            {
                popText &&
                <div className="absolute bg-white top-[125%] left-0 border-gray-300 border-[0.25px] rounded-md opacity-0 text-[16px] text-wrap w-full transition duration-500 ease-out group-hover:opacity-100">
                    {popText}
                </div>
            }
        </div>
    )
}