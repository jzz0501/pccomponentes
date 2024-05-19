import Image from "next/image";

export default function RightArrowButton({onClickEvent}: {onClickEvent: () => void}) {
    return <button className="bg-white p-[8px] border-gray-300 rounded-lg border-[0.25px] hover:bg-gray-300" onClick={onClickEvent}><Image className="h-[30px] w-[30px]" src="/img/right.svg" alt="" sizes="100vw" height={0} width={0} priority/></button>
}