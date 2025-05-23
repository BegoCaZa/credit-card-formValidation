import { GlobalStyles } from './styles/GlobalStyles';
import GeneralContainer from './components/generalContainer/GeneralContainer';
import CardsContainer from './components/cardsContainer/CardsContainer';
import Form from './components/form/Form';
import { useForm } from 'react-hook-form';

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue
  } = useForm({
    mode: 'onBlur'
  });

  const cardData = watch();

  const onSubmit = data => {
    //envia al formulario?
    console.log(data);
  };

  return (
    // el fondo sera un before del cards container
    <GeneralContainer>
      <GlobalStyles />
      <CardsContainer cardData={cardData} />
      <Form
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        onSubmit={onSubmit}
        setValue={setValue}
        cardData={cardData}
      />
    </GeneralContainer>
  );
};

export default App;
