import Logo from "@/components/atoms/logo/Logo";
import AccountMenu from "@/components/molecules/menu/account/AccountMenu";
import BasketMenu from "@/components/molecules/menu/basket/BasketMenu";
import CategoryMenu from "@/components/molecules/menu/category/CategoryMenu";
import SearchBarMenu from "@/components/molecules/menu/search-bar/SearchBarMenu";

export default function AppBar() {

    return (
        <div className="flex items-center h-[80px] space-x-[20px] bg-white px-[30px] max-w-[1700px] mx-auto">
            <div className="flex-none">
                <Logo/>
            </div>
            <div className="flex-none">
                <CategoryMenu/>
            </div>
            <SearchBarMenu/>
            <div className="flex-none">
                <AccountMenu/>
            </div>
            <div className="flex-none">
                <BasketMenu/>
            </div>
        </div>
    )
}