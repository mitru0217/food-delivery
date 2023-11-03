import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 100%;
  min-height: 48rem;
  height: 48rem;
  display: flex;
  overflow: hidden;
  position: relative;
  height: auto;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-family: 'Roboto', sans-serif;
`;

export const Overlay = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
  z-index: 1;
  padding: 2rem;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
`;
export const FormContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 65%;
  height: 100%;
  padding: 25px;
  text-align: center;
  border: 1px solid green;
`;

export const Wrapper = styled.div`
  width: 100%;
`;
export const FormHeading = styled.h3`
  font-size: 40px;
  margin-bottom: 15px;
`;
export const FormText = styled.p`
  margin-bottom: 15px;
  font-size: 14px;
`;
export const FormField = styled.input`
  width: 100%;
  height: 35px;
  line-height: 35px;
  padding-left: 15px;
  margin-bottom: 15px;
  background: #f4f8f7;
  border: none;
`;
export const OverlayHeading = styled.h2`
  font-size: 4rem;
  margin-bottom: 15px;
`;
export const OverlayText = styled.p`
  font-size: 2rem;
  margin: auto;
  margin-bottom: 15px;
`;
