import React from 'react';
import PropTypes from 'prop-types';
import InputStyles from './styles';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';

const Input = ({
  variant = 'primary',
  fullWidth = false,
  showSearchIcon = false,
  ...props
}) => {
  return (
    <InputStyles.Wrapper
      secondaryVariant={variant === 'secondary'}
      fullWidth={fullWidth}
    >
      {showSearchIcon && <SearchIcon />}

      <InputStyles.Input
        secondaryVariant={variant === 'secondary'}
        {...props}
      />
    </InputStyles.Wrapper>
  );
};

Input.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  showSearchIcon: PropTypes.bool,
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
