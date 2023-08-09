import React from 'react';

import s from './ecoAct.module.scss';

// prettier-ignore
const leftCont = [
  <><span className={s.green}>ЭКО</span> солнечные батареи</>,
  <><span className={s.green}>ЭКО</span> питьевая вода</>,
  <><span className={s.green}>ЭКО</span> солнечные батареи</>,
  <><span className={s.green}>ЭКО</span> зазеленение</>,
];
// prettier-ignore
const rightCont = [
  <><span className={s.green}>ЭКО</span> природные ресурсы</>,
  <><span className={s.green}>ЭКО</span> солнечные батареи</>,
  <><span className={s.green}>ЭКО</span> переработка отходов</>,
  <><span className={s.green}>ЭКО</span> очистка мусора</>,
];

const EcoAct = () => {
  return (
    <section className={s.ecoAct}>
      <div className='container-fluid'>
        <h2 className={s.title}>
          <span className={s.green}>ЭКО</span> активность
        </h2>

        <div className={`${s.figuresCont} d-flex-row-center`}>
          <div className={`${s.left} d-flex-col-no`}>
            {leftCont.map((t, i) => (
              <div key={i} className={`${s.ecoInfo} d-flex-row-end`}>
                <p>{t}</p>
                <figure className={`${s.iconCont} d-flex-row`}>
                  <img
                    className='containedImage'
                    src={`/images/eco-act/eco-act-${i + 1}.webp`}
                    alt=''
                  />
                </figure>
              </div>
            ))}
          </div>
          <figure className={`${s.centerImgCont}`}>
            {/* prettier-ignore */}
            <img src="/images/eco-act/eco-water-drop.webp" alt="earth in water drop" />
          </figure>
          <div className={`${s.right} d-flex-col-no`}>
            {rightCont.map((t, i) => (
              <div key={i} className={`${s.ecoInfo} d-flex-row-rev-end`}>
                <p>{t}</p>
                <figure className={`${s.iconCont} d-flex-row`}>
                  <img
                    className='containedImage'
                    src={`/images/eco-act/eco-act-${i + 5}.webp`}
                    alt=''
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoAct;
