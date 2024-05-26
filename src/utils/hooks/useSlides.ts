import { useEffect } from "react"

export default function useSlides(id_slider: string) {

    useEffect(() => {
        var isClicked = false
        const slides = document.getElementById(id_slider)
        if(!slides) return
        const dragStart = () => isClicked = true
        const dragStop = () => isClicked = false
        const dragMove = (e: MouseEvent) => {
            if(!isClicked) return
            slides.scrollLeft -= e.movementX 
        }
        slides.addEventListener("mousedown", dragStart)
        slides.addEventListener("mouseup", dragStop)
        slides.addEventListener("mousemove", dragMove)
        slides.addEventListener("mouseleave", dragStop)
    }, [])

}