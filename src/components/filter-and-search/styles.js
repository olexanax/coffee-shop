import styled from "styled-components";


const Wrapper = styled.div`
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 83px;
    div:first-child{
        input{
            height: 30px;
            width: 180px;
            font-family: Merienda;
            box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
            border: none;
            border-radius: 4px;
            margin-left: 19px;
        }
    }
    div:last-child{
        label{
            margin-right: 35px;
        }
        button{
            margin: 0 2.5px;
            height: 30px;
            width: 75px;
            border: none;
            background-color: #fff;
            box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
            border-radius: 4px;
            font-family: Merienda;
        }
        .activeButton{
            background-color: #000;
            color:#fff;
        }
    }
`

export default Wrapper