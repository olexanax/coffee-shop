import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";

import TitleBlock from "../../components/title-block/index";
import data from "../../data";
import Description from "../../components/description/index";

import Wrapper from "./AboutItemStyles";

import stub from '../../img/coffeeCity.jpg'


const AboutItem = () => {
    const [item, setItem] = useState();
    const {id} = useParams();

    useEffect(() => {
        setItem(data.goods.filter((item,i) => +item.key === +id)[0])
    },[])

    return(
        <Wrapper>
            <TitleBlock
                title='Our Coffee'
                backgroundKey = '2'
                subTitle=''
                quetion=''/>
            <Description title='About it'
                         fistParagraph={`Country: ${item?.country}`}
                         secondParagraph='Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' 
                         price={item?.price}
                         photo={item?.photo || stub}/>
        </Wrapper>
    )
};

export default AboutItem;