import FlexImage from "@/components/atoms/image/flex/FlexImage";
import MediumText from "@/components/atoms/text/medium/MediumText";

export default function ModuleCard({module}: {module: {imageURL: string, text: string}}) {
    return (
        <div className="flex flex-col items-center">
            <div className="rounded-lg overflow-hidden">
                <FlexImage imageURL={module.imageURL}/>
            </div>
            <MediumText text={module.text}/>
        </div>
    )
}