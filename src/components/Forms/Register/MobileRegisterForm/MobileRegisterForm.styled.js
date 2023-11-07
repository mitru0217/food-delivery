import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 100%;
  min-height: 48rem;
  height: 48rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  font-family: 'Roboto', sans-serif;
`;

export const FormContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 78%;
  padding-top: 2rem;
  text-align: center;
`;

export const Overlay = styled(motion.div)`
  position: relative;
  top: 78%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 1;
  padding: 2rem;
  border-radius: 3px;
  color: '#ffff';
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const FormHeading = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2980b9;
`;

export const FormText = styled.p`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #2980b9;
`;

export const OverlayText = styled.p`
  font-size: 1.25rem;
  margin: auto;
  color: #ffff;
`;

export const FormButton = styled.button`
  padding: 1rem 3rem;
  border-radius: 3rem;
  font-size: 2rem;
  color: #ffff;
  background-color: transparent;
`;
