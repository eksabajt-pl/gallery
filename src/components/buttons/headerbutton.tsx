type childrentype = {
    children: React.ReactNode
}
const HeaderButton = ({children}:childrentype) => {
    const redirect = `#${children}`
return(
    <a className="w-[10%] -foreground font-light m-2 p-2 border-2 text-center border-transparent hover:border-b-foreground" href={redirect}>{children}</a>
)
}
export default HeaderButton;