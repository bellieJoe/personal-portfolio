import TopNavigation from "./topNavigation";

export default function Layout({ children }){
    return (
        <>
            <TopNavigation />
            <main>{children}</main>
        </>
    )
}