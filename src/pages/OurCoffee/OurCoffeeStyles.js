import styled from 'styled-components'


const Wrapper = styled.div`
  & div p{
    max-width: 346px;
    text-align: center;
  }
  .conteiner{
    display: flex;
    gap:60px 70px;
    flex-wrap: wrap;
    padding: 61px 22%;
    div{
      height: 260px;
      width:220px;
      box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
      border-radius: 4px;

    }
    img{
      width: 167px;
      height: 115px;
        }
  }
`;

export default Wrapper