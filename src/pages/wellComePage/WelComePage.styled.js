import styled from 'styled-components';

import imgBg from '../../assets/images/BgImageContent.jpg';

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${imgBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
