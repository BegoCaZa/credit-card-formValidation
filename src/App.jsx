import { GlobalStyles } from './styles/GlobalStyles';
import GeneralContainer from './components/generalContainer/GeneralContainer';
import CardsContainer from './components/cardsContainer/CardsContainer';
import Form from './components/form/Form';
import { useState } from 'react';

const App = () => {
  const [cardData, setCardData] = useState({
    name: '',
    number: '',
    month: '',
    year: '',
    cvc: ''
  });
  return (
    // el fondo sera un before del cards container
    <GeneralContainer>
      <GlobalStyles />
      <CardsContainer cardData={cardData} />
      <Form cardData={cardData} setCardData={setCardData} />
    </GeneralContainer>
  );
};

export default App;
