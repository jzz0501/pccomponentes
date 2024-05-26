import MyImage, { MyImageSize } from "@/components/atoms/image/MyImage";
import Text, { TextSize } from "@/components/atoms/text/Text";

type TextIconProperty = {
    imageURL: string,
    text: string
}

export default function TextIcon(property: TextIconProperty) {

    const {imageURL, text} = property

    return (
        <div className="flex items-center space-x-[6px]">
            <MyImage imageURL={imageURL} size={MyImageSize.ICON}/>
            <Text text={text} size={TextSize.MEDIUM}/>
        </div>
    )

}