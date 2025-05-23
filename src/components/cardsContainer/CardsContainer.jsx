import {
  StyledCardsContainer,
  StyledFrontCard,
  StyledLogo,
  StyledBackgorundCardImage,
  StyledCardNumber,
  StyledCardName,
  StyledCardDate,
  StyledCardInfo,
  StyledBackCard,
  StyledCardCVC
} from './cardsContainer.styles.js';

//no necesito que se pinten estos valores cada vez, mejor sacarlos de la funcion
const defaultValues = {
  name: 'Jane Appleseed',
  number: '1234 5678 9123 4567',
  month: '00',
  year: '00',
  cvc: '000'
};

const CardsContainer = ({ cardData }) => {
  const { name, number, month, year, cvc } = cardData;
  const formattedCardNumber = formatCardNumber(number);
  return (
    <StyledCardsContainer>
      <StyledFrontCard>
        <StyledBackgorundCardImage
          src='./assets/bg-card-front.png'
          alt='Front Card'
        />
        <StyledLogo src='./assets/card-logo.svg' alt='Card Logo' />
        {/* si existe data, dibujala, sino dibuja la default */}
        <StyledCardNumber>
          {formattedCardNumber || defaultValues.number}
        </StyledCardNumber>
        <StyledCardInfo>
          {/* si existe name,pasalo a mayusculas, dibujala, sino dibuja la default */}
          <StyledCardName>
            {name?.toUpperCase() || defaultValues.name}
          </StyledCardName>
          <StyledCardDate>
            {month || defaultValues.month}/{year || defaultValues.year}
          </StyledCardDate>
        </StyledCardInfo>
      </StyledFrontCard>

      <StyledBackCard>
        <StyledBackgorundCardImage
          src='./assets/bg-card-back.png'
          alt='Back Card'
        />
        <StyledCardCVC>{cvc || defaultValues.cvc}</StyledCardCVC>
        {/* <span class="card-cvc" id="card-cvc-display">000</span> */}
      </StyledBackCard>
    </StyledCardsContainer>
  );
};

const formatCardNumber = number => {
  if (!number) return;
  return number.match(/.{1,4}/g).join(' ');
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
