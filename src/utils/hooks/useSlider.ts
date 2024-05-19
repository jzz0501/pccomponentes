import { useEffect } from "react"

export default function useSlider(id_slider: string, id_leftButton: string, id_rightButton: string) {
    
    const onClickLeftButton = () => {
        const slider = document.getElementById(id_slider)
        if(!slider) return
        slider.scrollBy({
            left: -slider.clientWidth,
            behavior: "smooth"
        })
    }

    const onClickRightButton = () => {
        const slider = document.getElementById(id_slider)
        if(!slider) return
        slider.scrollBy({
            left: slider.clientWidth,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        var isClicked = false
        const slider = document.getElementById(id_slider)
        const leftButton = document.getElementById(id_leftButton)
        const rightButton = document.getElementById(id_rightButton)
        if(!slider || !leftButton || !rightButton) return
        const dragStart = () => isClicked = true
        const dragStop = () => isClicked = false
        const dragMove = (e: MouseEvent) => {
            if(!isClicked) return
            slider.scrollLeft -= e.movementX 
        }
        const scrolling = () => {
            if(slider.scrollLeft === 0) {
                leftButton.style.display = "none"
            } else {
                leftButton.style.display = "block"
            }
            if(slider.scrollLeft + slider.clientWidth === slider.scrollWidth) {
                rightButton.style.display = "none"
            } else {
                rightButton.style.display = "block"
            }
        }
        slider.addEventListener("mousedown", dragStart)
        slider.addEventListener("mouseup", dragStop)
        slider.addEventListener("mousemove", dragMove)
        slider.addEventListener("mouseleave", dragStop)
        slider.addEventListener("scroll", scrolling)
    }, [])

    return {
        onClickLeftButton,
        onClickRightButton
    }

}