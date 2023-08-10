import React, { ChangeEvent, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import s from './services.module.scss';
import { SxProps } from '@mui/material';

const selectedStyles: SxProps = {
  borderRadius: '8px',
  border: '1px solid var(--green)',
  background: 'rgba(108, 194, 27, 0.14)',
};

const Services = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <div className={s.services}>
      <div className='container-fluid'>
        <h1 className={s.title}>Наши услуги</h1>
        <section className={s.servicesBox}>
          <div className={s.leftOptions}>
            <FormControl>
              <FormLabel id='demo-controlled-radio-buttons-group'>
                Gender
              </FormLabel>
              <RadioGroup
                aria-labelledby='demo-controlled-radio-buttons-group'
                name='controlled-radio-buttons-group'
                value={value}
                onChange={handleChange}
                color='success'
              >
                <FormControlLabel
                  sx={{
                    padding: '5px 15px 5px 10px',

                    borderRadius: '8px',
                    border: '1px solid #D9D9D9',
                    background: '#FFF',
                    height: '40px',
                    transition: 'all 0.4s',

                    '.MuiButtonBase-root': {
                      padding: '4px',
                    },

                    '.MuiTypography-root': {
                      marginLeft: '10px',

                      color: 'var(--gray-800)',
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: '150%',
                      letterSpacing: '0.07px',
                      textTransform: 'uppercase',
                    },
                    ...(value === '1' ? selectedStyles : {}),
                  }}
                  value='1'
                  control={<Radio color='success' />}
                  label='1 День'
                />
                <FormControlLabel
                  value='2'
                  control={<Radio color='success' />}
                  label=' Дня'
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className={s.rightPriceBox}></div>
        </section>
      </div>
    </div>
  );
};

export default Services;
