import styled from "styled-components";
import paperBG from '../../img/backgrounds/paperBG.jpg'


const Wrapper = styled.div`
    height: ${props => 595 + ((props.numberORraws -1) * 360)}px;
    background-image: url(${paperBG});
    padding: 0 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 29px;
    h2{
        font-size: 24px;
        margin-top: 80px ;
    }
`;

const CardConteiner = styled.div`
        display: flex;
        justify-content: center;
        gap: 71px;
        flex-wrap: wrap;
`

export default Wrapper
export{CardConteiner}