import { ReactNode } from "react";

export default function PrimaryButton({children, onClickEvent}: {children: ReactNode, onClickEvent: () => void}) {
    return <button className="p-[8px] rounded-sm bg-white transition ease-in-out duration-500 hover:bg-gray-200" onClick={onClickEvent}>{children}</button>
}