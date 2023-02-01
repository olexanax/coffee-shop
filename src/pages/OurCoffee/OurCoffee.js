import { Component } from "react";
import TitleBlock from "../../components/title-block/titleBlock";
import FilterAndSearch from "../../components/filter-and-search/filterAndSearch";
import Card from "../../components/card/card";
import data from "../../data";
import aromisticoCoffee from '../../img/goodsPhotos/aromisticoCoffee.png'
import girlWithCoffee from '../../img/girl.jpg'
import Description from "../../components/description/description";
import Wrapper from "./OurCoffeeStyles";



class OurCoffe extends Component{
    constructor(props){
        super(props)
        this.state = {
            search:'test'
        }
    }

    onSearch = (search, data) => {
        if(search === ''){
            return data
        }
        return data.filter(item => item.name.indexOf(search) !== -1)
    }

    render(){
        const arr = this.onSearch(this.state.search, data.goods.filter(item=>!item.best)).map((item, i)=>{
            return item = <Card name={item.name}
                                price={item.price} 
                                photo={aromisticoCoffee} 
                                country = {item.country}
                                key={item.key}
                                id= {item.key}/>
        })
        return(
            <Wrapper>
                <TitleBlock title='Our Coffee' backgroundKey='2'/>
                <Description title='About our beans'
                             fistParagraph='Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.' 
                             secondParagraph=' Afraid at highly months do things on at. Situation recommend objection do intention
                             so questions. 
                             As greatly removed calling pleased improve an. Last ask him cold feel
                             met spot shy want. Children me laughing we prospect answered followed. At it went
                             is song that held help face.' 
                             photo= {girlWithCoffee}/>
                <FilterAndSearch/>
                <div className="conteiner">{arr}</div>
            </Wrapper>
        )
    }
   
};

export default OurCoffe;