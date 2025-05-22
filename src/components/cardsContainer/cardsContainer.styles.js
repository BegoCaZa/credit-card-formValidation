import styled from 'styled-components';
import { COLORS } from '../../styles/color';

export const StyledCardsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledFrontCard = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.261);
`;
export const StyledBackgorundFrontImage = styled.img`
  display: block;
  width: 100%;
`;
export const StyledLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 65px;
  z-index: 2;
`;
export const StyledCardNumber = styled.span`
  position: absolute;
  top: 110px;
  left: 20px;
  font-size: 18px;
  color: ${COLORS.white};
  letter-spacing: 2px;
`;

export const StyledCardInfo = styled.div`
  position: absolute;
  top: 140px;
  left: 20px;
  display: flex;
  flex-direction: row;
  width: 85%;
  justify-content: space-between;
`;

export const StyledCardName = styled.span`
  font-size: 12px;
  color: ${COLORS.white};
`;
export const StyledCardDate = styled.span`
  font-size: 12px;
  color: ${COLORS.white};
`;

//    .front-card{
//   position: relative;
//   width: 450px;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   border-radius: 10px;
//   box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.261);

// }

// .card-logo{
//   position: absolute;
//   top: 30px;
//   left: var(--card-alignment);
//   width: 84px;
// }
// .card-number{
//   position: absolute;
//   top: 160px;
//   left: var(--card-alignment);
//   font-size: var(--typeography-cardName);
//   color: var(--color-cardInfo);
// }

// .card-info{
// position: absolute;
// top: 200px;
// left: var(--card-alignment);
// font-size: var(--typeography-cardInfo);
// color: var(--color-cardInfo);
// display: flex;
// flex-direction: row;
// width: 80%;
// justify-content: space-between;
//
