import { Component } from "react"

import Wrapper from "./styles"


class FilterAndSearch extends Component{
    constructor(props){
        super(props)
        this.state = {
            search:'',
            filter:'',
            active1: false,
            active2: false,
            active3: false
        }
    }
    onChangeSearch = (e) => {
        this.setState(()=>({
            search: e.target.value
        }))
        this.props.onChangeSearch(e.target.value)
    }
    onChangeFilter = (e,active) => {
        new Promise((resolve) => {
            this.setState((prevState)=>{
                return {filter: prevState.filter === e.target.getAttribute('data-country')?'':e.target.getAttribute('data-country'),}
            })
            resolve()
        })
        .then(()=>this.props.onChangeFilter(this.state.filter))
    }
    render(){
        const buttonsData = [
            {country: 'Brazil', activeOrder: 'active1'},
            {country: 'Kenya', activeOrder: 'active2'},
            {country: 'Columbia', activeOrder: 'active3'},
        ];
        const buttons = buttonsData.map(({country, activeOrder}) => {
            return (
                <button type="button"
                        className={this.state.filter === country?'activeButton':''}
                        key={activeOrder}
                        onClick={(e)=>this.onChangeFilter(e, activeOrder)}
                        data-country={country}>
                        {country}
                </button>
            )
        })
        return(
            <Wrapper>
                <div>
                    <label>
                        Lookiing for
                        <input onChange={this.onChangeSearch}
                               type="text" 
                               placeholder="start typing here..."
                               value={this.state.search}/>
                    </label>               
                </div>
                <div>
                    <label>Or filter</label>
                    {buttons}
                </div>
            </Wrapper>
        )
    }
}

export default FilterAndSearch