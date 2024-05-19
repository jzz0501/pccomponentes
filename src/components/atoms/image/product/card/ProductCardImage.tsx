import Image from "next/image";

export default function ProductCardImage({imageURL}: {imageURL: string}) {
    return (
        <Image className="h-[180px] w-[180px]" src={imageURL} alt="" sizes="100vw" height={0} width={0} draggable={false} priority/>
    )
}