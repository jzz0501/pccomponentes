import CategoryCard from "@/components/molecules/card/category/CategoryCard"
import CategoryAction from "@/model/CategoryAction"

type CategoryModuleProperty = {
    categories: CategoryAction[]
}

export default function CategoryModule(property: CategoryModuleProperty) {

    const {categories} = property

    return (
        <ul className="flex max-lg:flex-wrap">
            {
                categories.map((category, index) => {
                    return (
                        <li key={index} className="max-lg:w-[33.33%] max-sm:w-[50%] p-[10px]" >
                            <CategoryCard category={category}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}