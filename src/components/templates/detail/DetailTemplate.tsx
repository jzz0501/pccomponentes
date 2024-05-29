import ShowCase from "@/components/organisms/showcase/ShowCase";

export default function DetailTemplate({product_name}: {product_name: string}) {

    const images = [
        "/img/product.png","/img/product.png","/img/product.png","/img/product.png","/img/product.png"
    ]

    return (
        <div>
            <div className="flex space-x-[50px]">
                <div className="w-1/3 max-lg:w-1/2 max-md:w-full">
                    <ShowCase images={images}/>
                </div>
            </div>
        </div>
    )
}