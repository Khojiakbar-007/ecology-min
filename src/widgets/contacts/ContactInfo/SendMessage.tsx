import React from 'react';
import s from './contactInfo.module.scss';
import { Button, TextField, TextFieldProps } from '@mui/material';

const SendMessage = () => {
  return (
    <div className={`${s.sendMessageCont} container-fluid`}>
      <div className={s.mCont}>
        <h2 className={s.mTitle}>Написать обращение</h2>
        <form
          className={`${s.form} d-flex-row`}
          onSubmit={e => e.preventDefault()}
        >
          <StyledInput placeholder='ФИО' sx={{ width: '37%' }} />
          <StyledInput placeholder='Обращение' sx={{ width: '37%' }} />

          <Button
            sx={{
              height: '45px',
              borderRadius: '8px',
              width: '26%',
              fontSize: '16px',
              fontWeight: 500,
              textTransform: 'capitalize',
            }}
            type='submit'
            variant='contained'
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

const StyledInput = ({ sx, ...rest }: TextFieldProps) => {
  return (
    <TextField
      sx={{
        height: '48px !important',
        '.MuiInputBase-input , .MuiOutlinedInput-notchedOutline': {
          borderRadius: 0,
          // border: 'none',
        },
        '.MuiInputBase-input': {
          background: 'var(--white)',
          padding: '16px !important',
          fontSize: '16px',
          lineHeight: '16px',
          fontWeight: 400,
          height: '1em',

          '&::placeholder': {
            opacity: 1,
          },
        },
        ...sx,
      }}
      {...rest}
    />
  );
};

export default SendMessage;
