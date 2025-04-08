type childrentype = {
    children: React.ReactNode
}
const HeaderButton = ({children}:childrentype) => {
    const redirect = `#${children}`
return(
    <a className="rounded-2xl w-[25%] font-light m-2 p-2 border-3 text-center border-transparent hover:border-white" href={redirect}>{children}</a>
)
}
export default HeaderButton;