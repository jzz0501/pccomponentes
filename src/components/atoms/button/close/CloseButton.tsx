export default function CloseButton({onClickEvent}: {onClickEvent: () => void}) {
    return <button className="text-2xl text-black hover:bg-gray-200 h-[50px] w-[50px] p-[10px]" onClick={onClickEvent}>x</button>
}