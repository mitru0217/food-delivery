import styled from '@emotion/styled'
import BgProductModal from '../../../assets/images/BgProductModal.jpg';

export const Overlay = styled.div`
  position: fixed;
  top: 10rem;
  left: 0;
  width: 100%;
  height: calc(100vh - 10rem);
  display: flex;
  justify-content: center;
  z-index: 1000;
  padding-top: 50px;
  padding-bottom: 50px;
    background-image: url(${BgProductModal});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow-y: auto;
`;

