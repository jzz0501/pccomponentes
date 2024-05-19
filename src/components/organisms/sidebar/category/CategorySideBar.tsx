"use client"

import CloseButton from "@/components/atoms/button/close/CloseButton";

export default function CategorySideBar() {

    const onClickClose = () => {
        const catAside = document.getElementById("catAside")
        if(!catAside) return
        catAside.animate([
            {
                transform: `translateX(0)`,
                opacity: 1
            },
            {
                transform: `translateX(-${catAside.clientWidth}px)`,
                opacity: 0.25
            }
        ], {
            duration: 300,
            fill: "forwards"
        })
    }

    return (
        <div className="h-screen bg-white w-[400px] border-[0.5px]">
            <CloseButton onClickEvent={onClickClose}/>
        </div>
    )
}