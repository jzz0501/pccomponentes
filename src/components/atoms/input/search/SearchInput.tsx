export default function SearchInput({onFocus}: {onFocus: () => void}) {
    return <input className="px-[12px] w-full h-[40px]" placeholder="Buscar" onFocus={onFocus}/>
}