import FlexImage from "@/components/atoms/image/flex/FlexImage"

export default function Cover() {

    const coverImages = [
        "/img/cover/1.png","/img/cover/2.png","/img/cover/3.png"
    ]

    const subCoverImages = [
        "/img/cover/4.png","/img/cover/5.png"
    ]

    return (
        <div className="space-y-[60px]">
            <ul className="flex lg:space-x-[30px] max-lg:flex-wrap max-lg:space-y-[30px]">
                {
                    coverImages.map((image) => {
                        return <li className="w-[33.33%] max-lg:w-full rounded-lg overflow-hidden" key={image}><FlexImage imageURL={image}/></li>
                    })
                }
            </ul>
            <ul className="flex lg:space-x-[40px] max-lg:flex-wrap max-lg:space-y-[30px]">
                {
                    subCoverImages.map((image) => {
                        return <li className="w-[50%] max-lg:w-full rounded-lg overflow-hidden" key={image}><FlexImage imageURL={image}/></li>
                    })
                }
            </ul>
        </div>
    )
}