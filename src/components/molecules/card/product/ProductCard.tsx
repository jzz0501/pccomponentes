import MyImage, { MyImageSize } from "@/components/atoms/image/MyImage";
import Text from "@/components/atoms/text/Text";
import Typography, { TypographyHeading } from "@/components/atoms/typography/Typography";
import ProductCardData from "@/model/ProductCard";

type ProductCardProperty = {
    productCard: ProductCardData
}

export default function ProductCard(property: ProductCardProperty) {

    const {productCard} = property
    const {imageURL, discount, name, price} = productCard

    return (
        <div className="flex flex-col space-y-[6px] p-[10px] select-none">

            <div className="relative">
                <MyImage imageURL={imageURL} size={MyImageSize.CARD}/>
            </div>
            
            <Typography heading={TypographyHeading.H3}>
                <Text text={name}/>
            </Typography>
            
        </div>
    )
}