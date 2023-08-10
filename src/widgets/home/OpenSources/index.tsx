import React, { useState, Fragment } from 'react';

import s from './openSources.module.scss';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { LuChevronDown } from 'react-icons/lu';

const ChevronDownIcon = (props: any) => (
  <LuChevronDown
    {...props}
    style={{ transform: 'scale(1.5)', stroke: 'var(--black)' }}
  />
);

const OpenSources = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <section className={s.openSources}>
      <img
        className={s.decorImg}
        src='/images/home/open-sources-decor.webp'
        alt=''
      />
      <div className={`${s.cont} container-fluid`}>
        <span className={s.preTitle}>События</span>
        <h2 className={s.title}>Открытые данные</h2>

        <div className={s.sourcesBox}>
          <h4 className={s.boxTitle}>Кратко об экособытиях</h4>

          <div>
            {[1, 2, 3].map(i => {
              const panel = 'panel' + i;
              return (
                <Accordion
                  key={i}
                  expanded={expanded === panel}
                  onChange={handleChange(panel)}
                  sx={{
                    // margin: '0 0 1px !important',
                    '&.Mui-expanded': {
                      margin: '1px 0 0 !important',
                    },
                    // minHeight: '65px',
                    '.MuiAccordionSummary-content': {
                      margin: '25px 0 20px',
                    },
                    '.MuiAccordionSummary-root': {
                      padding: 0,
                    },
                    '.MuiAccordionDetails-root': {
                      padding: '0 0 50px',
                    },
                    boxShadow: 'none',
                    border: 'none',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ChevronDownIcon />}
                    // aria-controls='panel1bh-content'
                    // id='panel1bh-header'
                  >
                    <h4 className={s.sectionTitle}>
                      Сирдарё вилояти. Амалий семинар ўтказилди
                    </h4>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className={s.sectionDesc}>
                      Осуществление государственного контроля за соблюдением
                      законодательства в области обращения с отходами,
                      организацию действенной системы сбора, транспортировки,
                      утилизации, переработки и захоронения бытовых отходов при
                      тесном взаимодействии с органами государственной власти на
                      местах и самоуправления граждан;
                      <br />
                      <br />4 марта
                    </p>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSources;
