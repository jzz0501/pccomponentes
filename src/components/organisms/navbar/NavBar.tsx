"use client"

import PrimaryButton from "@/components/atoms/button/primary/PrimaryButton"
import Text from "@/components/atoms/text/Text"

export default function NavBar() {
    
    const navList = ["Estrena Realtime 12 5G", "Consolas y videojuegos", "Nuevo iPad Pro", "Ventilacion y aire acondicionado", "Hasta -50% dto. en TV"] 
    
    return (
        <ul className="flex justify-end max-w-[1600px] mx-auto">
            {
                navList.map((nav, index) => {
                    return (
                        <li key={index}>
                            <PrimaryButton onClickEvent={() => {}}>
                                <Text text={nav}/>
                            </PrimaryButton>
                        </li>
                    )
                })
            }
        </ul>
    )
}