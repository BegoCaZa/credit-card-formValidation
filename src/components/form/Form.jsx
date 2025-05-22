import { useForm } from 'react-hook-form';
import {
  StyledFormContainer,
  StyledInputContainer,
  StyledInputLabel,
  StyledTextInput,
  StyledErrorMessage,
  StyledDateInputContainer,
  StyledButton,
  StyledDateCVCContainer
} from './form.styles';
import { FORM_VALIDATIONS } from '../../constants/form_validations';

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ mode: 'onBlur' });

  return (
    <StyledFormContainer onSubmit={handleSubmit(data => console.log(data))}>
      <StyledInputContainer>
        <StyledInputLabel htmlFor='name'>Cardholder Name</StyledInputLabel>
        <StyledTextInput
          type='text'
          id='name'
          placeholder='e.g. Jane Appleseed'
          {...register('name', FORM_VALIDATIONS.NAME)}
        />
        <StyledErrorMessage>{errors?.name?.message}</StyledErrorMessage>
      </StyledInputContainer>

      <StyledInputContainer>
        <StyledInputLabel htmlFor='number'>Card Number</StyledInputLabel>
        <StyledTextInput
          type='text'
          id='number'
          placeholder='e.g. 1234 5678 9123 4567'
          maxLength={16}
          {...register('number', FORM_VALIDATIONS.NUMBER)}
        />
        <StyledErrorMessage>{errors?.number?.message}</StyledErrorMessage>
      </StyledInputContainer>
      <StyledDateCVCContainer>
        <StyledInputContainer>
          <StyledInputLabel htmlFor='mont'>Exp. Date (MM/YY)</StyledInputLabel>
          <StyledDateInputContainer>
            <StyledTextInput
              type='text'
              id='month'
              placeholder='MM'
              maxLength={2}
              {...register('month', FORM_VALIDATIONS.MONTH)}
            />
            <StyledTextInput
              type='text'
              id='year'
              placeholder='YY'
              maxLength={2}
              {...register('year', FORM_VALIDATIONS.YEAR)}
            />
          </StyledDateInputContainer>
          <StyledErrorMessage>{errors?.month?.message}</StyledErrorMessage>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledInputLabel htmlFor='cvc'>CVC</StyledInputLabel>
          <StyledTextInput
            type='text'
            id='cvc'
            placeholder='e.g. 123'
            maxLength={3}
            {...register('cvc', FORM_VALIDATIONS.CVC)}
          />
          <StyledErrorMessage>{errors?.cvc?.message}</StyledErrorMessage>
        </StyledInputContainer>
      </StyledDateCVCContainer>
      <StyledButton type='submit'>Confirm</StyledButton>
    </StyledFormContainer>
  );
};

export default Form;
