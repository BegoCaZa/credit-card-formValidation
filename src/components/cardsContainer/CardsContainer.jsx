import {
  StyledCardsContainer,
  StyledFrontCard,
  StyledLogo,
  StyledBackgorundFrontImage,
  StyledCardNumber,
  StyledCardName,
  StyledCardDate,
  StyledCardInfo
} from './cardsContainer.styles.js';
const CardsContainer = ({ cardData }) => {
  const {
    name = 'Jane Appleseed',
    number = '1234 5678 9123 4567',
    month = '11',
    year = '11'
  } = cardData;
  return (
    <StyledCardsContainer>
      <StyledFrontCard>
        <StyledBackgorundFrontImage
          src='./assets/bg-card-front.png'
          alt='Front Card'
        />
        <StyledLogo src='./assets/card-logo.svg' alt='Card Logo' />
        <StyledCardNumber>{number}</StyledCardNumber>
        <StyledCardInfo>
          <StyledCardName>{name.toUpperCase()}</StyledCardName>
          <StyledCardDate>
            {month || '00'}/{year || '00'}
          </StyledCardDate>
        </StyledCardInfo>
      </StyledFrontCard>
    </StyledCardsContainer>
  );
};
export default CardsContainer;

//  <div class="cards-container">
//       <div class="front-card">
//         <img src="./assets/bg-card-front.png" alt="Front Card" />
//         <img src="./assets/card-logo.svg" alt="Card Logo" class="card-logo" />
//         <span class='card-number'id="card-number-display">0000 0000 0000 0000</span>
//         <div class="card-info">
//           <span id="card-name-display">JANE APPLESEED</span>
//           <div class="card-dates">
//           <span id="card-month-display">00 /</span>
//           <span id="card-year-display">00</span>
//         </div>
//       </div>
//     </div>
//       <div class="back-card">
//         <img src="./assets/bg-card-back.png" alt="Back Card" />
//         <span class="card-cvc" id="card-cvc-display">000</span>
//       </div>
//     </div>
