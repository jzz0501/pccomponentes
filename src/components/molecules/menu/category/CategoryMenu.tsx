"use client"

import PrimaryButton, { PrimaryButtonPadding } from "@/components/atoms/button/primary/PrimaryButton"
import TextIcon from "../../text-icon/TextIcon"

export default function CategoryMenu() {

    const onClickCategory = () => {
        const catAside = document.getElementById("catAside")
        if(!catAside) return
        catAside.animate([
            {
                transform: `translateX(-${catAside.clientWidth}px)`,
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
        <div className="text-nowrap">
            <PrimaryButton onClickEvent={onClickCategory} padding={PrimaryButtonPadding.MEDIUM}>
                <TextIcon imageURL="/svg/menu.svg" text="Todas las categorias"/>
            </PrimaryButton>
        </div>
    )
}