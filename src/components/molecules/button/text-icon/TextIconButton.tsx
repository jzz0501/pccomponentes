import Icon from "@/components/atoms/icon/Icon";
import LargeText from "@/components/atoms/text/large/LargeText";

export default function TextIconButton({text, imageURL, onClickEvent}: {text: string, imageURL: string, onClickEvent: () => void}) {
    return (
        <button className="flex items-center space-x-[4px] mx-auto" onClick={onClickEvent}>
            <Icon imageURL={imageURL}/>
            <LargeText text={text}/>
        </button>
    )
}