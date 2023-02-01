import Card from "../card/card";
import data from '../../data'
import Wrapp from "./ourBestStyles";
import { CardConteiner } from "./ourBestStyles";
import aromisticoCoffee from '../../img/goodsPhotos/aromisticoCoffee.png'
import prestoCoffee from '../../img/goodsPhotos/prestoCoffee.png'
import solimoCoffee from '../../img/goodsPhotos/solimoCoffee.png'


const OurBest  = () => {
    const result = data.goods.filter(item=>item.best).map((item, i) => {
        switch(item.photo){
            case 'aromisticoCoffee':
                    return item = <Card id={item.key} name={item.name} price={item.price} photo={aromisticoCoffee} key={item.key}/>
            case 'prestoCoffee':
                    return item = <Card id={item.key} name={item.name} price={item.price} photo={prestoCoffee} key={item.key}/>
            case 'solimoCoffe':
                    return item = <Card id={item.key} name={item.name} price={item.price} photo={solimoCoffee} key={item.key}/>
            default: 
                    return item = <Card id={item.key} name={item.name} price={item.price} photo='add photo please' key={item.key}/>
        }
        
    })
    return(
        <Wrapp numberORraws={Math.ceil(result.length/3)}>
            <h2>Our best</h2>
            <CardConteiner>
                {result}
            </CardConteiner>

        </Wrapp>
    )
}
export default OurBest