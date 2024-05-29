import MyImage, { MyImageSize } from "@/components/atoms/image/MyImage";
import Tag, { TagColor, TagTextColor } from "@/components/atoms/tag/Tag";
import Text, { TextColor, TextFont, TextSize } from "@/components/atoms/text/Text";
import Typography, { TypographyHeading } from "@/components/atoms/typography/Typography";
import ProductCardData from "@/model/ProductCard";

type ProductCardProperty = {
    productCard: ProductCardData
}

export default function ProductCard(property: ProductCardProperty) {

    const {productCard} = property
    const {imageURL, discount, name, price} = productCard

    return (
        <div className="flex flex-col space-y-[6px] p-[18px] select-none">

            <div className="relative">
                <MyImage imageURL={imageURL} size={MyImageSize.CARD}/>
                <div className="absolute bottom-0 left-0">
                    <Tag text="Te" color={TagColor.BLUE} textColor={TagTextColor.WHITE} popText="ssssssssssssssssssssss"/>
                </div>
            </div>
            
            <Typography heading={TypographyHeading.H3}>
                <Text text={name}/>
            </Typography>
            
            <div className="flex items-center space-x-[10px]">
                <Text text={`${price - price * discount/100}$`} size={TextSize.LARGE} font={TextFont.BOLD} color={TextColor.RED}/>
                { discount !== 0 && <Text text={`${price}$`} size={TextSize.MEDIUM} color={TextColor.GRAY} underline={true}/> }
            </div>
            
        </div>
    )
}