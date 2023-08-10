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

const daysPerWeek = [
  { value: '1', label: '1 День' },
  { value: '2', label: '2 Дня' },
  { value: '3', label: '3 Дня' },
  { value: '4', label: '4 Дня' },
  { value: '5', label: '5 Дня' },
];

const numOfServs = [
  { value: '1', label: '1 Раз' },
  { value: '2', label: '2 Раза' },
  { value: '3', label: '3 Раза' },
  { value: '4', label: '4 Раза' },
  { value: '5', label: '5 Раз' },
];

const Services = () => {
  const [days, setDays] = useState('1');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDays((event.target as HTMLInputElement).value);
  };

  return (
    <div className={s.services}>
      <div className='container-fluid'>
        <h1 className={s.title}>Наши услуги</h1>
        <section className={`${s.servicesBox} d-flex-row-top`}>
          <div className={s.leftOptions}>
            {/* <FormLabel
                color='success'
                id='demo-controlled-radio-buttons-group'
              >
                Gender
              </FormLabel> */}
            <span className={s.heading}>Кол-во дней в неделю</span>

            <RadioGroup
              row
              aria-labelledby='demo-controlled-radio-buttons-group'
              name='controlled-radio-buttons-group'
              value={days}
              onChange={handleChange}
              color='success'
              sx={{ justifyContent: 'space-between' /* width: '100%' */ }}
            >
              {daysPerWeek.map(({ label, value }) => (
                <FormControlLabel
                  sx={{
                    padding: '5px 15px 5px 10px',
                    marginLeft: '0',
                    marginRight: '0 !important',

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
                    ...(days === value ? selectedStyles : {}),
                  }}
                  value={value}
                  control={<Radio color='success' />}
                  label={label}
                />
              ))}
            </RadioGroup>
          </div>
          <div className={s.rightPriceBox}>Nimadir</div>
        </section>
      </div>
    </div>
  );
};

export default Services;
