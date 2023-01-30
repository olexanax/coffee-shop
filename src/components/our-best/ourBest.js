import nextId from "react-id-generator";
import Card from "../card/card";
import data from '../../data'
import Wrapp from "./ourBestStyles";
import { CardConteiner } from "./ourBestStyles";
import aromisticoCoffee from '../../img/goodsPhotos/aromisticoCoffee.png'
import prestoCoffee from '../../img/goodsPhotos/prestoCoffee.png'
import solimoCoffee from '../../img/goodsPhotos/solimoCoffee.png'


const OurBest  = () => {
    const result = data.best.map(item => {
        switch(item.photo){
            case 'aromisticoCoffee':
                    return item = <Card name={item.name} price={item.price} photo={aromisticoCoffee} key={nextId()}/>
            case 'prestoCoffee':
                    return item = <Card name={item.name} price={item.price} photo={prestoCoffee} key={nextId()}/>
            case 'solimoCoffe':
                    return item = <Card name={item.name} price={item.price} photo={solimoCoffee} key={nextId()}/>
            default: 
                    return item = <Card name={item.name} price={item.price} photo='add photo please' key={nextId()}/>
        }
           
        // return item = <Card name={item.name} price={item.price} photo={item.photo}/>
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