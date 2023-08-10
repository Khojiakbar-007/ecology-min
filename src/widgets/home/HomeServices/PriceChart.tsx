import React from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';
import dynamic from 'next/dynamic';

//d @ts-expect-error
// const {PieChart, Pie, Cell, Label} = dynamic(() => import('recharts'), {
//   ssr: false,
// });

const data = (sum: number) => [
  { name: 'Group A', value: sum },
  { name: 'Group B', value: 20 * 100000 - sum },
  // { name: 'Group C', value: 300 },
  // { name: 'Group D', value: 200 },
];
const dataFake = [{ name: 'Group A', value: 400 }];

function PriceChart({ totSum }: { totSum: number }) {
  return (
    <PieChart width={378} height={378}>
      <Pie
        data={dataFake}
        innerRadius={120}
        outerRadius={182}
        startAngle={450}
        endAngle={90}
        fill='#F6F6F6'
        dataKey='value'
      />
      <Pie
        data={data(totSum)}
        innerRadius={110}
        outerRadius={179}
        fill='#6CC21B'
        startAngle={450}
        endAngle={90}
        dataKey='value'
      >
        <Label
          style={{
            fontSize: '40px',
            fontWeight: 500,
            letterSpacing: '-1.5px',
            fill: 'var(--black)',
          }}
          value={totSum}
          dy={-20}
          position='center'
        />
        <Label
          style={{
            fontSize: '27px',
            fontWeight: 500,
            letterSpacing: '-1.5px',
            fill: 'var(--black)',
          }}
          value='СУМ'
          dy={20}
          position='center'
        />

        {data(totSum).map((entry, i) => (
          <Cell key={`cell-${i}`} fill={i === 0 ? '#6CC21B' : '#FFFFFF'} />
        ))}
      </Pie>
    </PieChart>
  );
}

export default PriceChart;
