"use client"

import TextIconButton from "../button/text-icon/TextIconButton"

export default function Basket() {

    const onClickBasket = () => {
        const catAside = document.getElementById("basketAside")
        if(!catAside) return
        catAside.animate([
            {
                transform: `translateX(${catAside.clientWidth}px)`,
                opacity: 0.25
            },
            {
                transform: `translateX(0)`,
                opacity: 1
            }
        ], {
            duration: 300,
            fill: "forwards"
        })
    }

    return (
        <div className="w-[160px]">
            <TextIconButton text="Basket" imageURL="/svg/basket.svg" onClickEvent={onClickBasket}/>         
        </div>
    )
}