import data from "../../data";
import TitleBlock from "../../components/title-block/index";
import Description from "../../components/description/index";
import Card from "../../components/card/index";

import Wrapper from "./ForYourPlesureStyles";

import cupOfCoffee from '../../img/cupOfCoffee.jpg'
import stub from '../../img/coffeeCity.jpg'


const ForYourPleasure = () => {
    const arr = data.goods.filter(item=>!item.best).map((item, i)=>{
        return item = <Card name={item.name}
                            price={item.price} 
                            photo={item.photo||stub} 
                            country = {item.country}
                            key={item.key}
                            id={item.key}/>
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