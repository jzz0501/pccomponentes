import FlexImage from "@/components/atoms/image/flex/FlexImage";
import MediumBoldText from "@/components/atoms/text/medium/bold/MediumBoldText";

export default function ModuleCard({module}: {module: {imageURL: string, text: string}}) {
    return (
        <div className="flex flex-col space-y-[10px] items-center">
            <div className="rounded-lg overflow-hidden">
                <FlexImage imageURL={module.imageURL}/>
            </div>
            <MediumBoldText text={module.text}/>
        </div>
    )
}