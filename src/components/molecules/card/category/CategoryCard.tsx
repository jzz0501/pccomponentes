import MyImage, { MyImageRounded, MyImageSize } from "@/components/atoms/image/MyImage"
import Text, { TextSize } from "@/components/atoms/text/Text"
import CategoryAction from "@/model/CategoryAction"

type CategoryCardProperty = {
    category: CategoryAction
}

export default function CategoryCard(property: CategoryCardProperty) {

    const {category} = property
    const {imageURL, webURL, name} = category

    return (
        <div className="flex flex-col space-y-[10px] items-center">
            <MyImage imageURL={imageURL} size={MyImageSize.WRAP_CONTENT} rounded={MyImageRounded.MEDIUM}/>
            <Text text={name} size={TextSize.MEDIUM}/>
        </div>
    )
}