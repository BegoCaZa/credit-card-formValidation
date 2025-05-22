import { useForm } from 'react-hook-form';

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
        {<StyledErrorMessage>{errors?.name?.message}</StyledErrorMessage>}
      </StyledInputContainer>
    </StyledFormContainer>
  );
};

export default Form;
