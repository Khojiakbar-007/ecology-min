import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';
import ChevronDown from './chevron-down.svg';
type ILangs = 'uz' | 'ru' | 'en';

const SelectLang = () => {
  const [lang, setLang] = useState<ILangs>('uz');
  const handleChange = (e: SelectChangeEvent) => {
    setLang(e.target.value as ILangs);
  };
  return (
    <>
      <Select
        variant='standard'
        value={lang}
        onChange={handleChange}
        label='Age'
        IconComponent={ChevronDown}
        sx={{
          '.MuiSelect-icon': {
            top: 'initial',
          },
          color: 'var(--white)',
          fontSize: '18px',
          fontWeight: 300,
          fontStyle: 'normal',
          '&::before, &::after': {
            display: 'none',
          },
        }}
      >
        <MenuItem value={'uz'}>O'zbek</MenuItem>
        <MenuItem value={'ru'}>Русский</MenuItem>
        <MenuItem value={'en'}>English</MenuItem>
      </Select>
    </>
  );
};

export default SelectLang;
