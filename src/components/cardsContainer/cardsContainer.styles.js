import styled from 'styled-components';
import { COLORS } from '../../styles/color';

export const StyledCardsContainer = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  background-image: url('/assets/bg-main-mobile.png');
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 768px) {
    width: 500px;
    min-height: 100vh;
    justify-content: center;
    background-image: url('/assets/bg-main-desktop.png');
    background-size: cover;
    background-position: left;
    padding: 0;
  }
`;
export const StyledFrontCard = styled.div`
  position: absolute;
  top: 130px;
  left: 20px;
  width: 80%;
  display: flex;
  z-index: 2;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.261);

  @media (min-width: 768px) {
    top: 50%;
    left: 60%;
    transform: translate(-30%, -100%);
    width: 350px;
  }
`;
export const StyledBackgorundCardImage = styled.img`
  display: block;
  width: 100%;
`;
export const StyledLogo = styled.img`
  position: absolute;
  top: 15px;
  left: 15px;
  width: 65px;
  z-index: 2;
`;
export const StyledCardNumber = styled.span`
  position: absolute;
  top: 90px;
  left: 20px;
  font-size: 16px;
  color: ${COLORS.white};
  letter-spacing: 2px;

  @media (min-width: 768px) {
    font-size: 22px;
    top: 100px;
  }
`;

export const StyledCardInfo = styled.div`
  position: absolute;
  top: 120px;
  left: 20px;
  display: flex;
  flex-direction: row;
  width: 85%;
  justify-content: space-between;

  @media (min-width: 768px) {
    top: 150px;
    left: 20px;
  }
`;

export const StyledCardName = styled.span`
  font-size: 10px;
  color: ${COLORS.white};

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
export const StyledCardDate = styled.span`
  font-size: 10px;
  color: ${COLORS.white};

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledBackCard = styled.div`
  position: absolute;
  top: 40px;
  left: 50px;
  z-index: 1;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.261);

  @media (min-width: 768px) {
    top: 60%;
    left: 80%;
    transform: translate(-20%, -20%);
    width: 350px;
  }
`;
export const StyledCardCVC = styled.span`
  position: absolute;
  top: 63px;
  right: 38px;
  font-size: 12px;
  color: ${COLORS.white};

  @media (min-width: 768px) {
    top: 86px;
    left: 270px;
  }
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
