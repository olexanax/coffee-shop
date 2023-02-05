import { Component } from "react";

import data from "../../data";
import TitleBlock from "../../components/title-block/index";
import FilterAndSearch from "../../components/filter-and-search/index";
import Card from "../../components/card/index";
import Description from "../../components/description/index";

import Wrapper from "./OurCoffeeStyles";

import girlWithCoffee from '../../img/girl.jpg'
import stub from '../../img/coffeeCity.jpg'


class OurCoffe extends Component{
    constructor(props){
        super(props)
        this.state = {
            search:'',
            filter:''
        }
    }

    onFilter = (filter, data) => {
        switch(filter){
            case 'Brazil':
               return data.filter(item => item.country === 'Brazil')
            case 'Kenya':
                return data.filter(item => item.country === 'Kenya')
            case 'Columbia':
                return data.filter(item => item.country === 'Columbia')
            default: 
                return data;
        }
    }

    onChangeFilter = (value) => {
        this.setState(()=>({
            filter: value
        }))
    }

    onSearch = (search, data) => {
        if(search === ''){
            return data
        }
        return data.filter(item => item.name.indexOf(search) !== -1)
    }
    
    onChangeSearch = (value) => {
        this.setState(()=>({
            search: value
        }))
    }

    render(){
        const {filter, search} = this.state
        const arr = this.onSearch(search, this.onFilter(filter, data.goods.filter(item=>!item.best))).map((item, i)=>{
            return item = <Card name={item.name}
                                price={item.price} 
                                photo={item.photo||stub} 
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
                <FilterAndSearch onChangeSearch = {this.onChangeSearch} onChangeFilter = {this.onChangeFilter}/>
                <div className="conteiner">{arr}</div>
            </Wrapper>
        )
    }
   
};

export default OurCoffe;