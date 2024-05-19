import { ReactNode } from "react";

export default function SecondaryButton({children, onClickEvent}: {children: ReactNode, onClickEvent: () => void}) {
    return <button className="px-[14px] py-[10px] rounded-sm text-white bg-orange-500 text-[14px] transition ease-in-out duration-500 hover:bg-orange-500" onClick={onClickEvent}>{children}</button>
}