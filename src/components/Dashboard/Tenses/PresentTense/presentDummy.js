import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Correct', value: 400 },
  { name: 'Incorrect', value: 300 }
];

const COLORS = ['#0088FE', '#00C49F'];

function PresentDummy() {
  return (
    <div>
      <h2>Present Tense</h2>
      <div
        style={{
          width: '100%',
          height: 200,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ResponsiveContainer>
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx={100}
              cy={100}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div style={{ minWidth: '120px' }}>
          <h2>{`${((400 / 700) * 100).toFixed(1)} %`}</h2>
          <p>Percent</p>
        </div>
        <div style={{ minWidth: '120px' }}>
          <h2>{400}</h2>
          <p>Correct answers</p>
        </div>
        <div style={{ minWidth: '120px' }}>
          <h2>{700}</h2>
          <p>Total answers</p>
        </div>
      </div>
    </div>
  );
}

export default PresentDummy;