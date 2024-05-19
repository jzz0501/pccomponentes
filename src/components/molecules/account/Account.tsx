"use client"

import TextIconButton from "../button/text-icon/TextIconButton";

export default function Account() {

    const onClickAccount = () => {
        const catAside = document.getElementById("accountAside")
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
        <div>
            <TextIconButton text="Account" imageURL="/svg/user.svg" onClickEvent={onClickAccount}/>         
        </div>
    )
}