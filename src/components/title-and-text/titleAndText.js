import Wrapp from "./titleAndTextStyles";
import beansLogo from '../../img/beans-logo.svg'



const TitleAndText  = ({title, fistParagraph, secondParagraph, price}) => {
    return(
        <Wrapp>
             <h2>{title}</h2>
            <img src={beansLogo} alt="" />
            <p>{fistParagraph}</p>
            <p>{secondParagraph}</p>
            {typeof(+price) === 'number' && +price >= 0 && <p>Price: <span>{price}$</span></p>}
        </Wrapp>
    )
}
export default TitleAndText