import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F'];

function PreteriteTense(props) {
  const data = [
    { name: 'Correct', value: props.pretCorrect },
    { name: 'Incorrect', value: props.pretTotal - props.pretCorrect },
  ];
  return (
    <div>
      <h2>Preterite Tense</h2>
      <div
        style={{
          width: '100%',
          height: 200,
          display: 'flex',
          alignItems: 'center',
          marginTop: '15px',
          borderRadius: '4px',
          backgroundColor: '#fff',
          boxShadow:
            '0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12)',
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
          <h2>{`${((props.pretCorrect / props.pretTotal) * 100).toFixed(
            1
          )} %`}</h2>
          <p>Percent</p>
        </div>
        <div style={{ minWidth: '120px' }}>
          <h2>{props.pretCorrect}</h2>
          <p>Correct answers</p>
        </div>
        <div style={{ minWidth: '120px' }}>
          <h2>{props.pretTotal}</h2>
          <p>Total answers</p>
        </div>
      </div>
    </div>
  );
}

export default PreteriteTense;
