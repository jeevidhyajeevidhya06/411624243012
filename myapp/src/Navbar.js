import {Link} from "react-router-dom"
function nav(){
    return(
        <div>
            <ul>
                <li><Link to="/counter">Home</Link></li>
                <li><Link to="/first">About</Link></li>
                <li>About</li>
                <li>Contact</li>
            </ul>
    </div>
    )
}
export default nav;
