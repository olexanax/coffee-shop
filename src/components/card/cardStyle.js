import styled from "styled-components";




const Wrapp = styled.div`
    height: 240px;
    width: 220px;
    background-color: rgba(255, 255, 255, 0.65);
    color: #000;
    border-radius: 8px;;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 22px ;
    img{
        height: 130px;
        width: 150px;
    }
    p:last-child{
        font-weight: 700;
        align-self: flex-end;
        margin-right: 20px;
    }
`;

export default Wrapp