import TitleBlock from "../../components/title-block/titleBlock";
import TitleAndText from "../../components/title-and-text/titleAndText";
import OurBest from "../../components/our-best/ourBest";

import Wrapper from "./CoffeeHouseStyles";


const CoffeHouse = () => {
    return(
        <Wrapper>
            <TitleBlock
                title='Everything You Love About Coffee'
                backgroundKey = '1'
                subTitle='We makes every day full of energy and taste'
                quetion='Want to try our beans?'/>
            <TitleAndText
                title='About Us' 
                fistParagraph='Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.' 
                secondParagraph='Now residence dashwoods she excellent you. Shade being under his bed her, Much
                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                horrible but confined day end marriage. Eagerness furniture set preserved far
                recommend. Did even but nor are most gave hope. Secure active living depend son
                repair day ladies now.'/>
            <OurBest/>
        </Wrapper>
    )
};

export default CoffeHouse;