import Image from "next/image"

export enum MyImagePadding {
    SMALL = "p-[4px]",
    MEDIUM = "p-[6px]",
    LARGE = "p-[8px]"
}

export enum MyImageBorder {
    NORMAL = "border-[2px] border-gray-300"
}

export enum MyImageRounded {
    MEDIUM = "rounded-md"
}

export enum MyImageSize {
    WRAP_CONTENT = "w-[100%]",
    ICON = "w-[25px] h-[25px]",
    CARD = "w-[160px] h-[160px]",
    AUTO = "h-auto w-full"
}

type MyImagePropety = {
    imageURL: string,
    padding?: MyImagePadding,
    border?: MyImageBorder,
    size?: MyImageSize,
    rounded?: MyImageRounded
}

export default function MyImage(property: MyImagePropety) {

    const {imageURL, padding, border, size, rounded} = property

    return <Image className={`${padding} ${border} ${size} ${rounded} object-cover`} src={imageURL} alt="" height={0} width={0} sizes="100vw" draggable={false} priority/>
}