"use client"

import Icon from "@/components/atoms/icon/Icon";
import FlexImage from "@/components/atoms/image/flex/FlexImage";
import SearchInput from "@/components/atoms/input/search/SearchInput";
import { useEffect, useRef, useState } from "react";

export default function SearchBar() {

    const [searchActive, setSearchActive] = useState(false)
    const onFocusSearchBar = () => {
        setSearchActive(true)
    }

    const menuRef = useRef<any>()
    useEffect(() => {
        let handler = (event: MouseEvent) => {
            if(menuRef.current && !menuRef.current.contains(event.target)) {
                setSearchActive(false)
            }
        }
        document.addEventListener("mousedown", handler)
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    },[])

    return (
        <div ref={menuRef} className="w-full flex p-[12px] items-center relative">
            <div className="relative z-[200]">
                <button className="text-[14px] border-gray-300 border-[0.5px] h-[42px] w-[200px] flex items-center pl-[15px]">Todos los catalogos</button>
                <div className="absolute right-[20px] top-1/2 -translate-y-1/2">
                    <FlexImage imageURL="/img/a.png"/>
                </div>
            </div>
            <div className="relative w-full border-[0.5px] border-gray-300 z-[200]">
                <SearchInput onFocus={onFocusSearchBar}/>
                <div className="absolute top-1/2 -translate-y-1/2 right-[1%] ">
                    <Icon imageURL="/svg/search.svg"/>
                </div>
            </div>
            {
                searchActive &&
                <div className="absolute top-0 left-0 h-[400px] bg-white border-[0.25px] z-[100] w-full ">
                    <></>
                </div>
            }
        </div>
    )
}