import Image from "next/image";

export default function Icon({imageURL}: {imageURL: string}) {
    return (
        <Image className="w-[24px] h-[24px]" src={imageURL} alt="" sizes="100vw" height={0} width={0} priority/>
    )
}