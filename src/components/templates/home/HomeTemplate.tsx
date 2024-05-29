import MultiCarousel from "@/components/organisms/carousel/multi/MultiCarousel"
import SingleCarousel from "@/components/organisms/carousel/single/SingleCarousel"
import BannerModule, { BannerModuleAmount } from "@/components/organisms/module/banner/BannerModule"
import CategoryModule from "@/components/organisms/module/category/CategoryModule"
import CategoryAction from "@/model/CategoryAction"
import ProductCardData from "@/model/ProductCard"
import ProductCard from "@/model/ProductCard"

export default function HomeTemplate() {
    
    const categories: CategoryAction[] = [
        {imageURL: "/img/module/1.png", name: "module1", webURL: "/category/111"},
        {imageURL: "/img/module/1.png", name: "module2", webURL: "/category/111"},
        {imageURL: "/img/module/1.png", name: "module3", webURL: "/category/111"},
        {imageURL: "/img/module/1.png", name: "module4", webURL: "/category/111"},
        {imageURL: "/img/module/1.png", name: "module5", webURL: "/category/111"},
        {imageURL: "/img/module/1.png", name: "module6", webURL: "/category/111"}
      ]
    
    const productList: {title: string, list: ProductCard[]} = {
        title: "product",
        list: [
            {id: 1, name: "product1", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
            {id: 2, name: "product2", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
            {id: 3, name: "product3", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
            {id: 4, name: "product4", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
            {id: 5, name: "product5", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
            {id: 6, name: "product6", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
            {id: 1, name: "product1", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
            {id: 2, name: "product2", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
            {id: 3, name: "product3", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
            {id: 4, name: "product4", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true}
        ]
    }

    const multiList: {carouselTitle: string, productCards: ProductCardData[]}[] = [
        {
            carouselTitle: "product",
            productCards: [
                {id: 1, name: "product1", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
                {id: 2, name: "product2", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
                {id: 3, name: "product3", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
                {id: 4, name: "product4", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
                {id: 5, name: "product5", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
                {id: 6, name: "product6", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
                {id: 1, name: "product1", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
                {id: 2, name: "product2", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
                {id: 3, name: "product3", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
                {id: 4, name: "product4", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true}
            ]
        },
        {
            carouselTitle: "product",
            productCards: [
                {id: 1, name: "product1", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
                {id: 2, name: "product2", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
                {id: 3, name: "product3", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
                {id: 4, name: "product4", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
                {id: 5, name: "product5", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
                {id: 6, name: "product6", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
                {id: 1, name: "product1", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
                {id: 2, name: "product2", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
                {id: 3, name: "product3", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
                {id: 4, name: "product4", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true}
            ]
        },
        {
            carouselTitle: "product",
            productCards: [
                {id: 1, name: "product1", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
                {id: 2, name: "product2", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
                {id: 3, name: "product3", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
                {id: 4, name: "product4", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
                {id: 5, name: "product5", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
                {id: 6, name: "product6", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
                {id: 1, name: "product1", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
                {id: 2, name: "product2", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
                {id: 3, name: "product3", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
                {id: 4, name: "product4", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true}
            ]
        }
    ]

    const banners: {imageURL: string, webURL: string}[] = [
        {imageURL: "/img/cover/1.png", webURL: ""},
        {imageURL: "/img/cover/2.png", webURL: ""},
        {imageURL: "/img/cover/3.png", webURL: ""}
    ]
    
    const subbanners: {imageURL: string, webURL: string}[] = [
        {imageURL: "/img/cover/4.png", webURL: ""},
        {imageURL: "/img/cover/5.png", webURL: ""}
    ]

    return (
        <div className="space-y-[30px]">
            <BannerModule banners={banners} amount={BannerModuleAmount.THREE}/>
            <BannerModule banners={subbanners} amount={BannerModuleAmount.TWO}/>
            <SingleCarousel carouselTitle={productList.title} productCards={productList.list}/>
            <CategoryModule categories={categories}/>
            <MultiCarousel carousels={multiList}/>
        </div>
    )

}