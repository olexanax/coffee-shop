import { Link } from "react-router-dom";

import Wrapper from "./styles";


const Card  = ({name, price, photo, country, id}) => {
    return(
        <Link to={`/AboutItem/${id}`}>
            <Wrapper>
                <img src={photo} alt="" />
                <p>{name}</p>
                {country && <p>{country}</p>}
                <p>{price}$</p>
            </Wrapper>
        </Link>
    )
}

export default Card