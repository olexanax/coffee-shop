import Wrapper from "./descriptionStyles";
import TitleAndText from "../title-and-text/titleAndText";


const Description = ({photo, title, fistParagraph, secondParagraph, price}) => {
    return(
        <Wrapper>
            <img src={photo} alt=''></img>
            <TitleAndText 
                title={title} 
                fistParagraph={fistParagraph} 
                secondParagraph={secondParagraph}
                price = {price}/>
        </Wrapper>
    )
}

export default Description