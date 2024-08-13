// import { Link } from "react-router-dom"


const NavItemLink = (props) => {
    return (

        <>


            <a href={props.title} className="nav-link">{props.title}</a>



        </>

    )
}

export default NavItemLink