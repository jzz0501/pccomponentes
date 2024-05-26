import HomeTemplate from "@/components/templates/home/HomeTemplate";

export default function Home() {

  const moduleList: {imageURL: string, text: string}[] = [
    {imageURL: "/img/module/1.png", text: "module1"},
    {imageURL: "/img/module/1.png", text: "module2"},
    {imageURL: "/img/module/1.png", text: "module3"},
    {imageURL: "/img/module/1.png", text: "module4"},
    {imageURL: "/img/module/1.png", text: "module5"},
    {imageURL: "/img/module/1.png", text: "module6"}
  ]

  const productList: {id: number, name: string, imageURL: string, price: number, discount: number, score: number, comment_num: number, promocion: boolean, trending: boolean, recommend: boolean}[] = [
    {id: 1, name: "product1", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
    {id: 2, name: "product2", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
    {id: 3, name: "product3", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
    {id: 4, name: "product4", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
    {id: 5, name: "product5", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
    {id: 6, name: "product6", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
    {id: 1, name: "product1", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
    {id: 2, name: "product2", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
    {id: 3, name: "product3", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
    {id: 4, name: "product4", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
    {id: 5, name: "product5", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
    {id: 6, name: "product6", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true}
  ]

  const productList2: {id: number, name: string, imageURL: string, price: number, discount: number, score: number, comment_num: number, promocion: boolean, trending: boolean, recommend: boolean}[] = [
    {id: 1, name: "product333", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
    {id: 2, name: "product333", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
    {id: 3, name: "product333", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
    {id: 4, name: "product333", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
    {id: 5, name: "product333", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
    {id: 6, name: "product333", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
    {id: 1, name: "product333", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
    {id: 2, name: "product333", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
    {id: 3, name: "product333", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
    {id: 4, name: "product333", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
    {id: 5, name: "product333", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true},
    {id: 6, name: "product333", imageURL: "/img/product.png", price: 233, discount: 33, score: 4, comment_num: 321, promocion: true, trending: true, recommend: true}
  ]

  const multiList: {title: string, productList: {id: number, name: string, imageURL: string, price: number, discount: number, score: number, comment_num: number, promocion: boolean, trending: boolean, recommend: boolean}[]}[] = [
    {title: "Sobremesas", productList: productList},
    {title: "Monitores", productList: productList2},
    {title: "Perifericos", productList: productList},
    {title: "SmartWatches", productList: productList2},
    {title: "Consolas y videojuegos", productList: productList}
  ]

  return (
    <div>
      <HomeTemplate />
    </div>
  );
}