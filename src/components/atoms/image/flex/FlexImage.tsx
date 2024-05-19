import Image from "next/image";

export default function FlexImage({imageURL}: {imageURL: string}) {
    return <Image className="w-full" src={imageURL} alt="" sizes="100vw" height={0} width={0} draggable={false} priority/>
}