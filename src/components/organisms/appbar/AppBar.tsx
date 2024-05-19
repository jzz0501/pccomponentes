import Logo from "@/components/atoms/logo/Logo";
import Account from "@/components/molecules/account/Account";
import Basket from "@/components/molecules/basket/Basket";
import Category from "@/components/molecules/category/Category";
import SearchBar from "@/components/molecules/search-bar/SearchBar";

export default function AppBar() {

    return (
        <div className="flex items-center h-[80px] space-x-[20px] bg-white px-[30px] max-w-[1700px] mx-auto">
            <div className="flex-none">
                <Logo/>
            </div>
            <div className="flex-none">
                <Category/>
            </div>
            <SearchBar/>
            <div className="flex-none">
                <Account/>
            </div>
            <div className="flex-none">
                <Basket/>
            </div>
        </div>
    )
}