import Wrapper from "./ForYourPlesureStyles";
import TitleBlock from "../../components/title-block/titleBlock";
import Description from "../../components/description/description";
import cupOfCoffee from '../../img/cupOfCoffee.jpg'
import aromisticoCoffee from '../../img/goodsPhotos/aromisticoCoffee.png'
import Card from "../../components/card/card";
import data from "../../data";
import nextId from "react-id-generator";

const ForYourPleasure = () => {
    const arr = data.all.map(item=>{
        return item = <Card name={item.name}
                            price={item.price} 
                            photo={aromisticoCoffee} 
                            country = {item.country}
                            key={nextId()}/>
    })
    return(
        <Wrapper>
            <TitleBlock backgroundKey='3' title='For your pleasure'/>
            <Description photo={cupOfCoffee}
                         title='About our goods'
                         fistParagraph='Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.'
                         secondParagraph='Afraid at highly months do things on at. Situation recommend objection do intention
                         so questions. 
                         As greatly removed calling pleased improve an. Last ask him cold feel
                         met spot shy want. Children me laughing we prospect answered followed. At it went
                         is song that held help face.' />
            <div className="conteiner">{arr}</div>
        </Wrapper>
    )
};

export default ForYourPleasure;