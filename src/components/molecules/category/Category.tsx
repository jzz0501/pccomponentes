"use client"

import TextIconButton from "../button/text-icon/TextIconButton";

export default function Category() {

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
            <TextIconButton imageURL="/svg/menu.svg" text="Todas las categorias" onClickEvent={onClickCategory}/>
        </div>
    )
}