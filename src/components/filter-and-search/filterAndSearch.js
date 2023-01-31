import Wrapper from "./filterAndSearchStyles"
import { Component } from "react"

class FilterAndSearch extends Component{
    constructor(props){
        super(props)
        this.state = {
        
        }
    }


    render(){
        return(
            <Wrapper>
                <div>
                    <label htmlFor="">
                        Lookiing for
                        <input type="text" placeholder="start typing here..."/>
                    </label>               
                </div>
                <div>
                    <label>Or filter</label>
                    <button>Brazil</button>
                    <button>Kenya</button>
                    <button>Columbia</button>
                </div>
            </Wrapper>
        )
    }
}

export default FilterAndSearch