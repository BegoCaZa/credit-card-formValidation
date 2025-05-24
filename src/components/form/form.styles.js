import styled from 'styled-components';
import { COLORS } from '../../styles/color';

export const StyledFormContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: ${COLORS.white};

  @media (min-width: 768px) {
    width: 40%;
    min-height: 100vh;
  }
`;

export const StyledInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const StyledInputLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${COLORS.deepViolet};
  text-align: left;
  width: 100%;
`;
export const StyledTextInput = styled.input`
  width: 100%;
  padding: 16px;
  border-radius: 10px;
  border: 1.5px solid ${COLORS.lightGrey};
  ${({ error }) => (error ? `${COLORS.red}` : `${COLORS.lightGrey}`)};
  background-color: ${COLORS.white};
  font-size: 15px;
  color: ${COLORS.purplishGrey};
  &:focus {
    outline: none;
    border-color: ${COLORS.deepViolet};
  }
`;
export const StyledDateInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const StyledErrorMessage = styled.span`
  color: ${COLORS.red};
  font-size: 12px;
  text-align: left;
  width: 100%;
`;

export const StyledButton = styled.input`
  width: 100%;
  padding: 16px;
  border-radius: 10px;
  border: none;
  background-color: ${COLORS.deepViolet};
  color: ${COLORS.white};
  font-size: 15px;
  font-family: 'Space Grotesk', sans-serif;
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.purplishGrey};
  }
`;

export const StyledDateCVCContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
