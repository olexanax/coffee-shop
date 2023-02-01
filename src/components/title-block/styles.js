import styled from "styled-components";


const Wrapp = styled.div`
    background:url(${props => props.backgroundKey}) no-repeat;
    color:white;
    padding: 130px 0 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-weight: bold;
        font-size: 40;
        margin-bottom: 20px;
    }
    img{
        margin-bottom: 34px;
    }
    p{
        font-weight: bold;
        font-size: 24;
        margin-bottom: 20px;

    }
    button{
        font-size: 14px;
        width: 120px;
        height: 30px;
        border: 1px solid white;
        border-radius: 5px;
        background: rgba(255,255,255,0);
        color: white;
        &:hover{
            background: rgba(255,255,255,0.2);
        }
    }
`;

export default Wrapp