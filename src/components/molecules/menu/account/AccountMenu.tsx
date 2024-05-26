"use client"

import PrimaryButton, { PrimaryButtonPadding } from "@/components/atoms/button/primary/PrimaryButton"
import TextIcon from "../../text-icon/TextIcon"


export default function AccountMenu() {

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
            <PrimaryButton onClickEvent={onClickAccount} padding={PrimaryButtonPadding.MEDIUM}>
                <TextIcon imageURL="/svg/user.svg" text="username"/>
            </PrimaryButton>
        </div>
    )
}