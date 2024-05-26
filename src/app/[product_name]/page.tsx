import DetailTemplate from "@/components/templates/detail/DetailTemplate";

export default function Page({params}: {params: {product_name: string}}) {

    const {product_name} = params

    return (
        <DetailTemplate product_name={product_name}/>
    )
}