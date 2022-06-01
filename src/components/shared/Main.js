import styled from 'styled-components';
import BackGroundImage from '../../assets/backgroundimage.jpeg';
//import images
export default function Main({ children }) {
  return (
    <MainClass>
      <img src={BackGroundImage} alt="" />
      <h3>EM DESTAQUE</h3>
      {children}
    </MainClass>
  );
}

const MainClass = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 2000px;
  img {
    width: 100%;
  }
  h3 {
    margin: 50px 0 50px 0;
    font-size: 50px;
    font-weight: 200;
    color: #39d2c0;
  }
`;
