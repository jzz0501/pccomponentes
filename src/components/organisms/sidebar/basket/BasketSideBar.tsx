"use client"

import PrimaryButton, { PrimaryButtonShape } from "@/components/atoms/button/primary/PrimaryButton";

export default function BasketSideBar() {

    const onClickClose = () => {
        const catAside = document.getElementById("basketAside")
        if(!catAside) return
        catAside.animate([
            {
                transform: `translateX(0)`,
                opacity: 1
            },
            {
                transform: `translateX(${catAside.clientWidth}px)`,
                opacity: 0.25
            }
        ], {
            duration: 300,
            fill: "forwards"
        })
    }


    return (
        <div className="h-screen bg-white w-[400px] border-[0.5px]">
            <PrimaryButton onClickEvent={onClickClose} shape={PrimaryButtonShape.MEDIUM_SQUARE}>
                x
            </PrimaryButton>
        </div>
    )
}