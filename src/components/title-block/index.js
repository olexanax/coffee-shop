import Wrapp from "./styles";

import beansLogo from '../../img/white-beans-logo.svg'
import background1 from "../../img/backgrounds/background1.jpg"
import background2 from "../../img/backgrounds/background2.jpg"
import background3 from "../../img/backgrounds/background3.jpg"


const TitleBlock  = ({title, subTitle, quetion, backgroundKey}) => {
    let test;
    switch(backgroundKey){
        case'2':
            test = background2;
            break;
        case'3':
            test = background3;
            break;
        default:
            test = background1
    }
    return(
        <Wrapp backgroundKey={test}>
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
};

export default TitleBlock

