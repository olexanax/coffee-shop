import styled from 'styled-components'
// import beans from '../../img/coffee-beans.svg'
import beansLogo from '../../img/beans-logo.svg'


const Div = styled.div`
    font-family: 'Merienda', cursive;
    font-size:12px;
    display:flex;
    flex-direction:column;
    margin:0 auto;
    max-width: 1440px;
    min-height: 1000px;
    position: relative;
    header{
        position: absolute;
        top:0;
        left: 150px;
        background: rgba(0,1,0,0);
        nav{
            background: rgba(0,1,0,0);
        }
        /* nav:before{
            content: '';
            background-image: url();
                position:relative;
                z-index: 2;
        } */
    }
    a{
        text-decoration: none;
        color: #fff;
    }
    ul{
        display: flex;
        gap:30px;
        li{
            list-style-type: none;
        }
    }
    footer{
        height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:30px;
        background-image: url({beansLogo});
        padding-top: 52px;
        a{
            text-decoration: none;
            color: black;
            font-size: 12px;
        }
        img{
            width: 200px;
            height: 30px;
        }
    }


    
`;

export {Div}