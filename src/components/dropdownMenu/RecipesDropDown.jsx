import useClickOutside from "../../hooks/useClickOutside"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../contexts/authContext"

export default function UserDropDown({
    hide,
    showUserDropDownHandler,
    showUserDropDown
}){
    const {logout, userId} = useContext(AuthContext)
    
// let domNodeUser = useClickOutside(hide)
    const logoutHandler = () => {
        logout()
    }


    return(
        <li className="dropHover"  onClick={showUserDropDownHandler}>
        <img src="/images/userIcon.png" alt="userIcon" className="userIcon" />
        {showUserDropDown && 
            <ul className="userDropDown">
                <li><Link to={`/user/info/${userId}`}>Info about user</Link></li>
                <li><Link onClick={logoutHandler}>Logout</Link></li>
            </ul>
            } 
    </li>
    )
}