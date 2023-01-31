import Wrapp from "./cardStyle";
import { Link } from "react-router-dom";


const Card  = ({name, price, photo, country}) => {
    if(country){
        return(
            <Link to="/AboutItem">
                <Wrapp>
                    <img src={photo} alt="" />
                    <p>{name}</p>
                    <p>{country}</p>
                    <p>{price}$</p>
                </Wrapp>
            </Link>
        )
    }

    return(
        <Link to="/AboutItem">
            <Wrapp>
                <img src={photo} alt="" />
                <p>{name}</p>
                <p>{price}$</p>
            </Wrapp>
        </Link>
    )
}
export default Card