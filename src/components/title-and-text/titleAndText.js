import Wrapp from "./titleAndTextStyles";
import beansLogo from '../../img/beans-logo.svg'



const TitleAndText  = ({title, fistParagraph, secondParagraph}) => {
    return(
        <Wrapp>
            <h2>{title}</h2>
            <img src={beansLogo} alt="" />
            <p>{fistParagraph}</p>
            <p>{secondParagraph}</p>
        </Wrapp>
    )
}
export default TitleAndText