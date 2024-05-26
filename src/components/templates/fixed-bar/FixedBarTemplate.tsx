import AppBar from "@/components/organisms/appbar/AppBar";
import NavBar from "@/components/organisms/navbar/NavBar";
import AccountSideBar from "@/components/organisms/sidebar/account/AccountSideBar";
import BasketSideBar from "@/components/organisms/sidebar/basket/BasketSideBar";
import CategorySideBar from "@/components/organisms/sidebar/category/CategorySideBar";

export default function FixedBarTemplate() {
    return (
        <div>
            <div className="h-[80px] w-full fixed top-0 left-0 z-[150]">
                <AppBar/>
                <hr/>
            </div>
            <div className="mt-[80px] max-lg:hidden border-[0.25px] border-gray-200">
                <NavBar/>
            </div>
            <div id="catAside" className="fixed left-0 top-0 z-[300] -translate-x-full">
                <CategorySideBar/>
            </div>
            <div id="basketAside" className="fixed right-0 top-0 z-[300] translate-x-full">
                <BasketSideBar/>
            </div>
            <div id="accountAside" className="fixed right-0 top-0 z-[300] translate-x-full">
                <AccountSideBar/>
            </div>
            
         </div>
    )
}