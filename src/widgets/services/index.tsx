import React, { ChangeEvent, useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import s from './services.module.scss';
import { Button, MenuItem, SxProps } from '@mui/material';
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

const Services = () => {
  const [days, setDays] = useState('1');
  const [servs, setServs] = useState('1');
  const [servType, setServType] = useState<
    'trash' | 'desinfection' | 'cleaning'
  >('desinfection');
  const [trashType, setTrashType] = useState<'build' | 'ord'>('build');
  const [transportType, setTransportType] = useState<
    'miniBus' | 'car' | 'lorry'
  >('miniBus');

  const [cityType, setCityType] = useState<
    'Toshkent' | 'Samarqand' | 'Parkent' | 'Buxoro'
  >('Toshkent');
  const [addressType, setAddressType] = useState<'shayx' | 'yashn' | 'serg'>(
    'shayx'
  );

  const [totSum, setTotSum] = useState(750000);

  const [payMethod, setPayMethod] = useState<'cash' | 'terminal'>('cash');

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
  }, [days, servs, servType, trashType, transportType, cityType, addressType]);

  return (
    <div className={s.services}>
      <div className='container-fluid'>
        <h1 className={s.title}>Наши услуги</h1>
        <section className={`${s.servicesBox} d-flex-row-top`}>
          <div className={s.leftOptions}>
            <div className={`${s.selects} d-flex-col`}>
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

              <div className={s.servType}>
                <StyledServSelect
                  label='Вид мусора'
                  value={trashType}
                  setValue={setTrashType}
                >
                  <MenuItem value={'build'}>Строительный</MenuItem>
                  <MenuItem value={'ord'}>Бытовой</MenuItem>
                </StyledServSelect>
              </div>

              <div className={s.servType}>
                <StyledServSelect
                  label='Вид мусора'
                  value={transportType}
                  setValue={setTransportType}
                >
                  <MenuItem value={'build'}>Автомобиль</MenuItem>
                  <MenuItem value={'miniBus'}>Газель</MenuItem>
                  <MenuItem value={'lorry'}>Грузовик</MenuItem>
                </StyledServSelect>
              </div>
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

            <div className={`${s.selects} d-flex-col`}>
              <div className={s.servType}>
                <StyledServSelect
                  label='Город'
                  value={cityType}
                  setValue={setCityType}
                >
                  <MenuItem value={'Toshkent'}>Ташкент</MenuItem>
                  <MenuItem value={'Samarqand'}>Самарканд</MenuItem>
                  <MenuItem value={'Buxoro'}>Бухара</MenuItem>
                </StyledServSelect>
              </div>

              <div className={s.servType}>
                <StyledServSelect
                  label='Ваш адрес'
                  value={addressType}
                  setValue={setAddressType}
                >
                  <MenuItem value={'shayx'}>РАйон шайхантаурский</MenuItem>
                  <MenuItem value={'yashn'}>РАйон яшнабадский</MenuItem>
                  <MenuItem value={'serg'}>РАйон Сергелийский</MenuItem>
                </StyledServSelect>
              </div>
            </div>

            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34835.42580591615!2d69.24651711669267!3d41.315221381670966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b3b50823165%3A0xa5cbadc900d5ecec!2sMustakillik%20maydoni!5e0!3m2!1sen!2s!4v1691659450369!5m2!1sen!2s'
              width='637'
              height='318'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
          <div className={s.rightPriceBox}>
            <h2 className={s.topTitle}>Стоимость услуги</h2>

            <PriceChart totSum={totSum} />

            <div className={s.servType}>
              <StyledServSelect
                label='Вид оплаты'
                value={payMethod}
                setValue={setPayMethod}
              >
                <MenuItem value={'cash'}>НАличными</MenuItem>
                <MenuItem value={'terminal'}>Терминал</MenuItem>
              </StyledServSelect>
            </div>

            <Button
              sx={{
                minWidth: '218px',
                height: '45px',
                borderRadius: '8px',
                margin: '75px auto 0',
                display: 'block',
              }}
              variant='contained'
            >
              Заказать
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
