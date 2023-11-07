import styled from '@emotion/styled'
import { motion } from 'framer-motion';
import { MdClose } from 'react-icons/md';


export const Overlay = styled(motion.div)`
 position:fixed;
  height:100%;
  width:100%;
  background: rgba(0, 0, 0, 0.8);
  z-index:9;
`;

export const ModalWrapper = styled(motion.div)`
	position: absolute;
	max-width: 80rem;
	width: 30rem;
	height: auto;
	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
	background: transparent;
	color: ${p => p.theme.colors.mainBlack};
	display: flex;
	justify-content: center;
  align-items: center;
	border-radius: ${p => p.theme.radii.cardStandart};
	z-index: 9;
	@media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
		width: 60rem;
  } 
	@media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
		width: 80rem;
		min-height: 48rem;
  } 
`;

export const CloseModalButton = styled(MdClose)`
	cursor: pointer;
	position: absolute;
	fill: ${p=> p.theme.colors.mainWhite};
	top: 1%;
	right: 1%;
	width: 3.2rem;
	height: 3.2rem;
	padding: 0;
	z-index: 10;
	@media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
		fill: ${p=> p.theme.colors.mainBlack};
  } 
`;



