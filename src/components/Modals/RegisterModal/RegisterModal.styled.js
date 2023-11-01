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
  min-height: 48rem;
	width: 80rem;
	height: auto;
	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
	background: #fff;
	color: #000;
	display: flex;
	justify-content: center;
  align-items: center;
	border-radius: 10px;
	z-index: 9;
`;

export const CloseModalButton = styled(MdClose)`
	cursor: pointer;
	position: absolute;
	top: 1%;
	right: 1%;
	width: 32px;
	height: 32px;
	padding: 0;
	z-index: 10;
`;



