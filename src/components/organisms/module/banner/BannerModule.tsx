import MyImage, { MyImageRounded, MyImageSize } from "@/components/atoms/image/MyImage"

export enum BannerModuleAmount {
    TWO = "w-1/2",
    THREE = "w-1/3"
}

type BannerModuleProperty = {
    banners: {imageURL: string, webURL: string}[],
    amount: BannerModuleAmount
}

export default function BannerModule(property: BannerModuleProperty) {

    const {banners, amount} = property

    return (
        <ul className="flex flex-wrap">
            {
                banners.map((banner, index) => {
                    const {imageURL, webURL} = banner
                    return (
                        <li key={index} className={`${amount} p-[10px] max-lg:w-full`}>
                            <MyImage imageURL={imageURL} size={MyImageSize.WRAP_CONTENT} rounded={MyImageRounded.MEDIUM} />
                        </li>
                    )
                })
            }
        </ul>
    )
}