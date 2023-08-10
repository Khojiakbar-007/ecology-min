import { Select, SelectChangeEvent, SxProps } from '@mui/material';
import React, { ReactNode } from 'react';
import { FaChevronDown } from 'react-icons/fa';

import s from './services.module.scss';

interface IStyledSelectProps<T> {
  value: T;
  setValue: any;
  label: string;
  className?: string;
  required?: boolean;
  children: ReactNode;
  sx?: SxProps;
  disabled?: boolean;
}

const StyledServSelect = <T extends string | null>({
  value,
  setValue,
  label,
  className,
  children,
  required,
  disabled,
  sx,
}: IStyledSelectProps<T>) => {
  return (
    <>
      <p className={s.heading}>{label}</p>
      <Select
        value={value || ''}
        required={required}
        className={className}
        onChange={(e: SelectChangeEvent) => setValue(e.target.value as T)}
        fullWidth
        sx={{
          boxShadow: 'none !important',
          background: '#FFF',
          borderRadius: '8px',
          '.MuiInputBase-input': {
            padding: '8px 0 8px 16px !important',

            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '150%',
            letterSpacing: '0.07px',
            textTransform: 'uppercase',
          },
          '.MuiInputBase-root': {},
          '.MuiInputBase-root, .MuiOutlinedInput-notchedOutline ': {
            borderRadius: '8px',
            border: '1px solid #CFD8DC',
          },
          '.MuiSelect-icon': {
            top: 'initial',
          },
          minWidth: '150px',
          ...sx,
        }}
        IconComponent={({ className, ...rest }: any) => (
          <FaChevronDown
            style={{ fill: '#424242', marginRight: '8px' }}
            className={`${className}`}
            {...rest}
          />
        )}
        disabled={disabled}
      >
        {children}
      </Select>
    </>
  );
};

export default StyledServSelect;
