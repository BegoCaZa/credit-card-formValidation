import { GlobalStyles } from './styles/GlobalStyles';
import { GeneralContainer } from './components/generalContainer/GeneralContainer';
import { CardsContainer } from './components/cardsContainer/CardsContainer';
import { Form } from './components/form/Form';

const App = () => {
  return (
    // el fondo sera un before del cars container
    <GeneralContainer>
      <GlobalStyles />
      <CardsContainer />
      <Form />
    </GeneralContainer>
  );
};

export default App;
