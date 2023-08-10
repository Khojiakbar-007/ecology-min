import React, { ChangeEvent, useEffect, useState } from 'react';

import s from './homeServices.module.scss';
import {
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  SxProps,
} from '@mui/material';
import StyledServSelect from './StyledServSelect';
import PriceChart from './PriceChart';

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

const HomeServices = () => {
  const [servType, setServType] = useState<
    'trash' | 'desinfection' | 'cleaning'
  >('desinfection');
  const [days, setDays] = useState('1');
  const [servs, setServs] = useState('1');

  const [totSum, setTotSum] = useState(750000);

  const handleChangeDays = (event: ChangeEvent<HTMLInputElement>) => {
    setDays((event.target as HTMLInputElement).value);
  };
  const handleChangeServs = (event: ChangeEvent<HTMLInputElement>) => {
    setServs((event.target as HTMLInputElement).value);
  };

  useEffect(() => {
    // setTotSum()
    const val = Math.floor(Math.random() * 20 + 1);
    const cost = val * 100000;
    setTotSum(cost);
  }, [days, servs, servType]);

  return (
    <div className={s.homeServices}>
      <div className='container-fluid'>
        <h2 className={s.title}>Услуги</h2>
        <div className={`${s.servicesBox} d-flex-row-top`}>
          <div className={s.leftOptions}>
            <div className={s.servType}>
              <StyledServSelect
                label='Вид услуги'
                value={servType}
                setValue={setServType}
              >
                <MenuItem value={'trash'}>Вывоз мусора</MenuItem>
                <MenuItem value={'desinfection'}>Дезинфекция</MenuItem>
              </StyledServSelect>
            </div>

            <div className={s.days}>
              <span className={s.heading}>Кол-во дней в неделю</span>
              <RadioGroup
                row
                aria-labelledby='demo-controlled-radio-buttons-group'
                name='controlled-radio-buttons-group'
                value={days}
                onChange={handleChangeDays}
                color='success'
                sx={{ justifyContent: 'space-between' /* width: '100%' */ }}
              >
                {daysPerWeek.map(({ label, value }, i) => (
                  <FormControlLabel
                    key={i}
                    sx={{
                      padding: '5px 12px 5px 10px',
                      marginLeft: '0',
                      marginRight: '0 !important',
                      width: '120px',

                      borderRadius: '8px',
                      border: '1px solid #D9D9D9',
                      background: '#FFF',
                      height: '40px',
                      transition: 'all 0.4s',

                      '.MuiButtonBase-root': {
                        padding: '4px',
                      },

                      '.MuiTypography-root': {
                        marginLeft: '8px',

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
            <div className={s.numOfServs}>
              <span className={s.heading}>Кол-во раз</span>

              <RadioGroup
                row
                aria-labelledby='demo-controlled-radio-buttons-group'
                name='controlled-radio-buttons-group'
                value={servs}
                onChange={handleChangeServs}
                color='success'
                sx={{ justifyContent: 'space-between' /* width: '100%' */ }}
              >
                {numOfServs.map(({ label, value }, i) => (
                  <FormControlLabel
                    key={i}
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
                      ...(servs === value ? selectedStyles : {}),
                    }}
                    value={value}
                    control={<Radio color='success' />}
                    label={label}
                  />
                ))}
              </RadioGroup>
            </div>
          </div>

          {/* <div className={s.rightPriceBox}></div> */}
          <div className={s.chartWrapper}>
            <div className={s.blueBg}></div>
            <PriceChart totSum={totSum} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
