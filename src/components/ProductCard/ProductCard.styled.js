import styled from '@emotion/styled';
import {
  MdOutlineFileDownloadDone,
  MdInfoOutline,
  MdClear,
} from 'react-icons/md';
import { BsCartPlus } from 'react-icons/bs';

export const Wrapper = styled.div`
  width: 300px;
  height: 380px;
  background: white;
  margin: auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0;
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;
  &:hover {
    transform: scale(1);
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  width: 100%;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    63deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(179, 230, 215, 1) 58%,
    rgba(0, 212, 255, 1) 100%
  );
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Bottom = styled.div`
  width: 200%;
  height: 30%;
  transition: transform 0.5s ease-in-out;
  transform: ${props =>
    props.isClicked ? 'translateX(-50%);' : 'translateX(0)'};
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #009688;
  transition: 0.5s;
  font-size: 2rem;
  letter-spacing: 1px;
  color: ${p => p.theme.colors.mainGrey};
`;

export const Info = styled.p`
  display: block;
  padding-top: 8px;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.8px;
  color: ${p => p.theme.colors.mainGreen};
`;

export const Left = styled.div`
  height: 100%;
  width: 50%;
  background: ${p => p.theme.colors.mainWhite};
  position: relative;
  float: left;
`;

export const Right = styled.div`
  width: 50%;
  background: #a6cdde;
  color: white;
  float: right;
  height: 200%;
  overflow: hidden;
`;

export const LeftDetails = styled.div`
  padding: 1rem;
  float: left;
  width: calc(70% - 40px);
`;
export const AddButton = styled.button`
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(30% - 2px);
  height: 100%;
  color: ${p => p.theme.colors.mainGrey};
  transition: background 0.5s;
  border-left: solid thin rgba(0, 0, 0, 0.1);
  &:hover {
    background: #a6cdde;
  }
`;
export const AddIcon = styled(BsCartPlus)`
  font-size: 30px;
  transition: transform 0.5s;
  color: ${p => p.theme.colors.mainGreen};
`;

export const DoneIcon = styled(MdOutlineFileDownloadDone)`
  font-size: 30px;
  transition: transform 0.5s;
  color: ${p => p.theme.colors.mainGrey};
`;
export const RightDone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(30% - 2px);
  float: left;
  height: 50%;
  border-right: solid thin rgba(255, 255, 255, 0.3);
  color: ${p => p.theme.colors.mainGrey};
  transition: transform 0.5s;
  transform: ${props =>
    props.isHoveredForRemove ? 'translateY(-100%)' : 'translateY(0)'};
`;
export const RightRemove = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(30% - 2px);
  transition: transform 0.5s;
  border-right: solid thin rgba(255, 255, 255, 0.3);
  height: 50%;
  background: #bc3b59;
  clear: both;
  transition: transform 0.5s, background 0.5s;
  transform: ${props =>
    props.isHoveredForRemove ? 'translateY(-100%)' : 'translateY(0)'};
  background: ${props => (props.isHoveredForRemove ? '#9B2847' : '#bc3b59')};
`;

export const RemoveIcon = styled(MdClear)`
  font-size: 30px;
  transition: transform 0.5s;
  color: ${p => p.theme.colors.mainWhite};
`;

export const RightDetails = styled.div`
  padding: 20px;
  float: right;
  width: calc(70% - 40px);
`;
export const Details = styled.p`
  padding-top: 8px;
  font-size: 15px;
  font-weight: 600;
  color: ${p => p.theme.colors.mainGrey};
`;

export const Inside = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
  background: #92879b;
  width: 14rem;
  height: 140px;
  padding: 2rem;
  position: absolute;
  top: -70px;
  right: -70px;
  border-radius: 0 0 200px 200px;
  transition: all 0.5s, border-radius 2s, top 1s;
  overflow: hidden;
  width: ${props => (props.isHovered ? '100%' : '14rem')};
  right: ${props => (props.isHovered ? '0' : '-70px')};
  top: ${props => (props.isHovered ? '0' : '-70px')};
  border-radius: ${props => (props.isHovered ? '0' : '0 0 200px 200px')};
  height: ${props => (props.isHovered ? '100%' : '140px')};
`;

export const InfoIcon = styled(MdInfoOutline)`
  position: absolute;
  right: 85px;
  top: 85px;
  color: ${p => p.theme.colors.mainWhite};
  font-size: 30px;
  opacity: 1;
  visibility: ${props => (props.isHovered ? 'hidden' : 'visible')};
`;
export const Contents = styled.p`
  color: #5b5060;
  font-size: 20px;
  font-weight: 500;
  opacity: ${props => (props.isHovered ? '1' : '0')};
  transform: ${props => (props.isHovered ? 'scale(1)' : 'scale(0.5)')};
  transform: ${props =>
    props.isHovered ? 'translateY(0)' : 'translateY(-200%)'};
  transition: opacity 0.2s, transform 0.8s;
`;
