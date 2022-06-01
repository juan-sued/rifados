import styled from 'styled-components';
// import css

import Header from '../shared/Header';
import Main from '../shared/Main';
// import components

import testImage from '../../assets/testImage.webp';

export default function Home_Page() {
  return (
    <>
      <Header />
      <Main>
        <Card_Rifa>
          <img src={testImage} alt="" />
          <div className="percentBar"></div>

          <div className="container">
            <div className="containerTitle">
              <h4>29 miniaturas + dioram...</h4>
              <p>Sorteio 16 de março</p>
            </div>
            <div className="containerPrice">
              <p>R$</p>
              <p>20</p>
            </div>
          </div>
        </Card_Rifa>
      </Main>
      <footer></footer>
    </>
  );
}

const Card_Rifa = styled.div`
  background-color: white;
  min-height: 300px;
  width: 300px;
  border-radius: 10px;
  box-shadow: 0px 1px 15px grey;
  transition: linear 200ms;
  :hover {
    box-shadow: none;
  }
  img {
    border-radius: 10px 10px 0 0;
  }
  .percentBar {
    height: 3px;
    width: 90%;
    background-color: #39d2c0;
    position: relative;
    bottom: 4px;
  }
  .container {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  .containerTitle {
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4 {
      font-weight: 200;
      font-size: 20px;
    }
  }

  .containerPrice {
    display: flex;
    width: 40px;
    display: flex;
    justify-content: space-between;

    p:first-child {
      color: black;
      font-weight: 300;
      font-size: 13px;
      position: relative;
      top: 5px;
    }
    p {
      font-size: 20px;
    }
  }
`;
