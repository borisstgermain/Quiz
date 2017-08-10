import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';


const propTypes = {
  label: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  fullWidth: PropTypes.boolean,
};


export default function Button(props) {
  const { label, onClickHandler, fullWidth } = props;
  const classNames = `${styles.button}  ${fullWidth ? styles['button--full-width'] : ''}`;

  return (
    <button
      className={classNames}
      onClick={onClickHandler}
    >
      {label}
    </button>
  );
}

Button.propTypes = propTypes;
