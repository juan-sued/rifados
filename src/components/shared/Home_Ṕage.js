import styled from 'styled-components';
import Header from './Header';

import BackGroundImage from '../../assets/backgroundimage.png';

export default function Home_Page() {
  return (
    <>
      <Header />
      <main>
        <img src={BackGroundImage} alt="" />
      </main>
      <footer></footer>
    </>
  );
}
