import styled from "styled-components";


const Wrapper = styled.div`
    height: 240px;
    width: 220px;
    background-color: rgba(255, 255, 255, 0.65);
    color: #000;
    border-radius: 8px;;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 22px ;
    &:hover{
        outline: 3px solid grey;
    }
    img{
        height: 130px;
        width: 150px;
        align-self: center;
    }
    p{
        margin-right: 20px;
    }
    p:last-child{
        font-weight: 700;
        align-self: flex-end;
    }
    p:nth-child(3){
    }
`;

export default Wrapper