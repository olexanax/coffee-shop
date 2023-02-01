import Wrapp from "./cardStyle";
import { Link } from "react-router-dom";


const Card  = ({name, price, photo, country, id}) => {
    return(
        <Link to={`/AboutItem/${id}`}>
            <Wrapp>
                <img src={photo} alt="" />
                <p>{name}</p>
                {country && <p>{country}</p>}
                <p>{price}$</p>
            </Wrapp>
        </Link>
    )
}
export default Card