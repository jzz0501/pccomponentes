"use client"

import { ReactNode } from "react";

export enum PrimaryButtonPadding {
    MEDIUM = "p-[8px]"
}

export enum PrimaryButtonBorder {
    NORMAL = "border-[0.25px] border-gray-300"
}

export enum PrimaryButtonRounded {
    SMALL = "rounded-sm"
}

export enum PrimaryButtonSize {
    WRAP_CONTENT = "h-full w-full",
    MEDIUM_SQUARE = "h-[50px] w-[50px]"
}

type PrimaryButtonProperty = {
    children: ReactNode,
    onClickEvent: () => void,
    padding?: PrimaryButtonPadding,
    border?: PrimaryButtonBorder,
    rounded?: PrimaryButtonRounded,
    size?: PrimaryButtonSize
}

export default function PrimaryButton(property: PrimaryButtonProperty) {

    const {children, onClickEvent, padding, border, rounded, size} = property

    return (
        <button className={`${padding} ${border} ${rounded} ${size} bg-white transition ease-in-out duration-300 hover:bg-gray-300`} onClick={onClickEvent}>
            {children}
        </button>
    )
}