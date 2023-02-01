import styled from "styled-components";
import line from '../../img/Line.svg'


const Wrapper = styled.div`
    background: url(${line}) center bottom / 240px 2px no-repeat;
    display: flex;
    justify-content: center;
    gap: 42px;
    padding: 70px 0 60px 0;
    img:first-child{
        box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.25);
    }
    span{
        font-weight: 800;
        font-size: 24px;
    }
    div{
        gap:0;
        padding: 0;
        p{
            max-width: 412px;
            text-align: left;
        }
    }
`

export default Wrapper