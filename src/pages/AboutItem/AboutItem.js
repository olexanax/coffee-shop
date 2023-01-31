import Wrapper from "./AboutItemStyles";
import TitleBlock from "../../components/title-block/titleBlock";
import Description from "../../components/description/description";
import coffeeCity from '../../img/coffeeCity.jpg'
const AboutItem = () => {
    return(
        <Wrapper>
            <TitleBlock
                title='Our Coffee'
                backgroundKey = '2'
                subTitle=''
                quetion=''/>
            <Description title='About it'
                         fistParagraph='Country: Brasil' 
                         secondParagraph='Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' 
                         price='16.99'
                         photo= {coffeeCity}/>
        </Wrapper>
    )
};

export default AboutItem;