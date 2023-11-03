import styled from '@emotion/styled';
import { FaTimesCircle, FaUser } from 'react-icons/fa';

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
  &:hover .remove-icon {
    display: block;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const RemoveIcon = styled(FaTimesCircle)`
  display: none;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
`;

export const AvatarIcon = styled(FaUser)`
width: 60%;
height: 60%;
fill: ${p => p.theme.colors.mainWhite};
&:hover {
  fill: ${p => p.theme.colors.mainGrey};
}
`