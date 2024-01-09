import styled from 'styled-components';

const InputStyles = {};

InputStyles.Wrapper = styled.div`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  display: flex;
  padding: 9px 16px;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  align-self: stretch;
  background-color: ${({ theme, secondaryVariant }) =>
    secondaryVariant ? theme.white : theme.black95};

  border: ${({ theme, secondaryVariant }) =>
    secondaryVariant ? `1px solid ${theme?.black85}` : 'none'};

  border-radius: 6px;
  outline: none;
`;

InputStyles.Input = styled.input`
  width: 100%;
  background-color: inherit;
  outline: none;
  border: none;
  color: ${({ theme, secondaryVariant }) =>
    secondaryVariant ? theme.black60 : theme.black50};
  font-size: ${({ secondaryVariant }) => (secondaryVariant ? '14px' : '15px')};
  font-weight: 400;
  line-height: ${({ secondaryVariant }) =>
    secondaryVariant ? '20px' : '22px'};
`;

export default InputStyles;
