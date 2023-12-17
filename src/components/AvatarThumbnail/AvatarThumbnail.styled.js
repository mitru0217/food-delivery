import styled from '@emotion/styled';
import { FaUser } from 'react-icons/fa';

export const Thumb = styled.div`
  width: 4rem;
  height: 4rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AvatarIcon = styled(FaUser)`
  width: 60%;
  height: 60%;
  fill: ${p => p.theme.colors.mainWhite};
  &:hover {
    fill: ${p => p.theme.colors.mainGrey};
  }
`;
