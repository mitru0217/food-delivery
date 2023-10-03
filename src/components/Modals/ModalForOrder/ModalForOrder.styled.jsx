import styled from 'styled-components';

import BgImgModal from '../../../assets/images/BgModal.jpg';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${BgImgModal});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
