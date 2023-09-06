import React from 'react';
import s from './management.module.scss';
import WorkerCard from 'components/worker-card';
// prettier-ignore
import { IWorkerType, highManageData, managementData } from 'shared/managementData';
highManageData;

const ManagementSection = ({ isHigh }: { isHigh?: boolean }) => {
  return (
    <section className={s.manageCont}>
      <div className={`${s.cardsCont} container-fluid d-flex-col-stretch`}>
        {(isHigh ? highManageData : managementData).map(data => (
          <WorkerCard key={data.name} data={data as IWorkerType} />
        ))}
      </div>
    </section>
  );
};

export default ManagementSection;
