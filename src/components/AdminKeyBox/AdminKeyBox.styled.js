import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaKey, FaTimes } from 'react-icons/fa';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40rem;
  height: 20rem;
`;

export const Circle = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.5rem;
  height: 7.5rem;
  border: 2px solid #4682b4;
  border-radius: 50%;
  cursor: pointer;
`;
export const Key = styled(FaKey)`
  color: #4682b4;
  transition: color 0.3s ease, transform 0.3s ease;
  &:hover {
    color: #191970;
    transform: rotate(45deg);
  }
`;
export const IconClose = styled(FaTimes)`
  color: #4682b4;
  transition: color 0.3s ease, transform 0.3s ease;
  &:hover {
    color: #191970;
    transform: rotate(90deg);
  }
`;
export const Close = styled(motion.div)`
  position: absolute;
  right: 5%;
  top: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 2px solid #4682b4;
  transition: border-color 0.3s ease;
  cursor: pointer;
  &:hover {
    border-color: #191970;
  }
`;

export const KeyForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const KeyInput = styled.input`
  width: 20rem;
  height: 4rem;
  padding: 1rem;
  border: 2px solid #4682b4;
  outline: none;
  border-radius: 5rem;
  background: transparent;
  color: #4682b4;
  font-size: 1.75rem;
`;

export const KeySubmit = styled.button`
  width: 15rem;
  height: 4rem;
  padding: 1rem;
  border: none;
  outline: none;
  border-radius: 5rem;
  background: transparent;
  color: #4682b4;
  font-size: 2rem;
  &:hover {
    text-decoration: underline;
    font-weight: 500;
  }
`;
