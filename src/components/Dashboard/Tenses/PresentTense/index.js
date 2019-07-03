import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F'];

function PresentTense(props) {
  const data = [
    { name: 'Correct', value: props.presentCorrect },
    { name: 'Incorrect', value: props.presentTotal - props.presentCorrect },
  ];

  return (
    <div>
      <h2>Present Tense</h2>
      <div
        style={{
          width: '100%',
          height: 200,
          display: 'flex',
          alignItems: 'center',
          padding: '0 15px',
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
          <h2>{`${((props.presentCorrect / props.presentTotal) * 100).toFixed(
            1
          )} %`}</h2>
          <p>Percent</p>
        </div>
        <div style={{ minWidth: '120px' }}>
          <h2>{props.presentCorrect}</h2>
          <p>Correct answers</p>
        </div>
        <div style={{ minWidth: '120px' }}>
          <h2>{props.presentTotal}</h2>
          <p>Total answers</p>
        </div>
      </div>
    </div>
  );
}

export default PresentTense;
