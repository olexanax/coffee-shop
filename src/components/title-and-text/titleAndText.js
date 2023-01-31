import Wrapp from "./titleAndTextStyles";
import beansLogo from '../../img/beans-logo.svg'



const TitleAndText  = ({title, fistParagraph, secondParagraph, price}) => {
    let Result = () => {
        if (typeof(+price) === 'number' && +price >= 0){
            return(
                <>
                <h2>{title}</h2>
                <img src={beansLogo} alt="" />
                <p>{fistParagraph}</p>
                <p>{secondParagraph}</p>
                <p>Price: <span>{price}$</span></p>
                </>
            )
        }
        return(
            <>
            <h2>{title}</h2>
            <img src={beansLogo} alt="" />
            <p>{fistParagraph}</p>
            <p>{secondParagraph}</p>
            </>
        )
    }
    
    return(
        <Wrapp>
            <Result/>
        </Wrapp>
    )
}
export default TitleAndText