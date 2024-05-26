import { useEffect } from "react"

export default function useCarousel(id_slider: string, id_leftButton: string, id_rightButton: string) {

    useEffect(() => {
        const slides = document.getElementById(id_slider)
        const leftButton = document.getElementById(id_leftButton)
        const rightButton = document.getElementById(id_rightButton)
        if(!slides || !leftButton || !rightButton) return
        const scrolling = () => {
            if(slides.scrollLeft === 0) {
                leftButton.style.display = "none"
            } else {
                leftButton.style.display = "block"
            }
            if(slides.scrollLeft + slides.clientWidth === slides.scrollWidth) {
                rightButton.style.display = "none"
            } else {
                rightButton.style.display = "block"
            }
        }
        slides.addEventListener("scroll", scrolling)
    }, [])
    

    const onClickLeftButton = () => {
        const slides = document.getElementById(id_slider)
        if(!slides) return
        slides.scrollBy({
            left: -slides.clientWidth,
            behavior: "smooth"
        })
    }

    const onClickRightButton = () => {
        const slides = document.getElementById(id_slider)
        if(!slides) return
        slides.scrollBy({
            left: slides.clientWidth,
            behavior: "smooth"
        })
    }

    return {
        onClickLeftButton,
        onClickRightButton
    }

}