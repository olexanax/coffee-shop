import data from '../../data'
import Card from "../card";
import {CardConteiner} from "./styles";

import Wrapper from "./styles";

import stub from '../../img/coffeeCity.jpg'


const OurBest  = () => {
    const result = data.goods.filter(item=>item.best).map((item, i) => {
        return item = <Card id={item.key}
                            name={item.name} 
                            price={item.price} 
                            photo={item.photo||stub} 
                            key={item.key}/>
    })
    return(
        <Wrapper numberORraws={Math.ceil(result.length/3)}>
            <h2>Our best</h2>
            <CardConteiner>
                {result}
            </CardConteiner>

        </Wrapper>
    )
}

export default OurBest