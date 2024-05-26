import ShowCase from "@/components/organisms/showcase/ShowCase";

export default function DetailTemplate({product_name}: {product_name: string}) {

    const images = [
        "/img/product.png","/img/product.png","/img/product.png","/img/product.png","/img/product.png"
    ]

    return (
        <div>
            <div>
                <ShowCase images={images}/>
            </div>
        </div>
    )
}