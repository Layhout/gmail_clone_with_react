import "./styles/sidebaroption.css"

const SideBarOption = ({Icon, title, number, selected}) => {
    return (
        <div className={`sidebarOption ${selected && "sidebar_active"}`}>
            <Icon />
            <h3>{title}</h3>
            <p>{ number}</p>
        </div>
    )
}

export default SideBarOption
