import React from 'react';
import s from './management.module.scss';
import WorkerCard from 'components/worker-card';
import { managementData } from 'shared/managementData';

const ManagementSection = () => {
  return (
    <section className={s.manageCont}>
      <div className={`${s.cardsCont} container-fluid d-flex-col-stretch`}>
        {managementData.map(data => (
          <WorkerCard data={data} />
        ))}
      </div>
    </section>
  );
};

export default ManagementSection;
