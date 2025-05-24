import styled from 'styled-components';

const StyledGeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px;
  min-height: 100vh;
  gap: 100px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 100px 0px 0px;
  }
`;

export { StyledGeneralContainer };
