import ProductCardData from "@/model/ProductCard"
import ProductCard from "../../card/product/ProductCard"

type ProductCardSlidesProperty = {
    id_slides: string,
    productCards: ProductCardData[]
}

export default function ProductCardSlides(property: ProductCardSlidesProperty) {

    const {id_slides, productCards} = property

    return (
        <ul id={id_slides} className="whitespace-nowrap overflow-hidden space-x-[30px]">
            {
                productCards.map((productCard) => {
                    return (
                        <li className="inline-block" key={productCard.id}>
                            <ProductCard productCard={productCard}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}