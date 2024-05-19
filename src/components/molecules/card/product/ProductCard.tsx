import ProductCardImage from "@/components/atoms/image/product/card/ProductCardImage";
import PromocionTag from "@/components/atoms/tag/promocion/Promocion";
import RecommendTag from "@/components/atoms/tag/recommend/Recommend";
import TrendingTag from "@/components/atoms/tag/trending/Trending";
import MediumText from "@/components/atoms/text/medium/MediumText";
import CurrentPriceText from "@/components/atoms/text/price/current/CurrentPriceText";
import PreviousPriceText from "@/components/atoms/text/price/previous/PreviousPriceText";

export default function ProductCard({product}: {product: {id: number, imageURL: string, name: string, price: number, discount: number, score: number, comment_num: number, promocion: boolean, trending: boolean, recommend: boolean}}) {
    return (
        <div className="flex flex-col space-y-[6px] p-[12px] select-none bg-white" draggable={false}>
            <div className="relative">
                <div className="p-[10px]">
                    <ProductCardImage imageURL={product.imageURL}/>
                </div>
                <div className="absolute top-[3%] left-[3%] bg-red-800 p-[4px] text-[12px] text-white rounded-md">
                    {`-${product.discount}%`}
                </div>
                <div className="absolute flex flex-wrap-reverse w-full left-0 bottom-0">
                    <PromocionTag/>
                    <TrendingTag/>
                    <RecommendTag/>
                </div>
            </div>
            
            <MediumText text={product.name}/>

            <div className="flex items-center space-x-[8px]">
                <CurrentPriceText price={product.price * product.discount/100}/>
                <PreviousPriceText price={product.price}/>
            </div>

            <div className="flex items-center space-x-[8px]">

            </div>
        </div>
    )
}