export default function CurrentPriceText({price}: {price: number}) {
    return <h1 className="text-red-900 text-[18px] font-bold">{`${price.toFixed(2)}$`}</h1>
}