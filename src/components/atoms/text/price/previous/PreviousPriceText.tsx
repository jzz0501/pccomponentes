export default function PreviousPriceText({price}: {price: number}) {
    return <h1 className="line-through text-[12px]">{`${price}$`}</h1>
}