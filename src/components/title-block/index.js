import { Component } from "react";

import Wrapp from "./styles";

import beansLogo from '../../img/white-beans-logo.svg'
import background1 from "../../img/backgrounds/background1.jpg"
import background2 from "../../img/backgrounds/background2.jpg"
import background3 from "../../img/backgrounds/background3.jpg"


class TitleBlock extends Component {
    render(){
        const {title, subTitle, quetion, backgroundKey} = this.props
        let background;
        switch(backgroundKey){
            case'2':
            background = background2;
                break;
            case'3':
            background = background3;
                break;
            default:
                background = background1
        }
        return(
            <Wrapp backgroundKey={background}>
                <h1>{title}</h1>
                {+backgroundKey === 1 &&
                    <> 
                        <p>{subTitle}</p>
                        <p>{quetion}</p>
                        <img src={beansLogo} alt="" />
                        <button>More</button>
                    </>
                }
            </Wrapp>
        )
    }
   
};

export default TitleBlock

