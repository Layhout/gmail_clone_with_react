import "./styles/sidebaroption.css"

const SideBarOption = ({Icon, title, number, selected}) => {
    return (
        <div className={`sidebarOption ${selected && "sidebarOption_active"}`}>
            <Icon />
            <h3>{title}</h3>
            <p>{ number}</p>
        </div>
    )
}

export default SideBarOption
