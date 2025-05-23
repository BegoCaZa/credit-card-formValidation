import styled from 'styled-components';

const StyledGeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 100vh;
  gap: 70px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 100px 0px 0px;
  }
`;

export { StyledGeneralContainer };
