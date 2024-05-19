import ModuleCard from "@/components/molecules/card/module/ModuleCard"

export default function ModuleList({moduleList}: {moduleList: {imageURL: string, text: string}[]}) {
    return (
        <ul className="flex max-lg:flex-wrap">
            {
                moduleList.map((module) => {
                    return <li className="max-lg:w-[33.33%] max-sm:w-[50%] p-[10px]" key={module.text}><ModuleCard module={module}/></li>    
                })
            }
        </ul>
    )
}