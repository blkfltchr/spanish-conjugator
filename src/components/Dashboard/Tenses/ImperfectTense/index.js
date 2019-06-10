import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F'];

function ImperfectTense(props) {
  const data = [
    { name: 'Correct', value: props.impCorrect },
    { name: 'Incorrect', value: props.impTotal - props.impCorrect }
  ];
  return (
    <div>
      <h2>Imperfect Tense</h2>
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
          <h2>{`${((props.impCorrect / props.impTotal) * 100).toFixed(
            1
          )} %`}</h2>
          <p>Percent</p>
        </div>
        <div style={{ minWidth: '120px' }}>
          <h2>{props.impCorrect}</h2>
          <p>Correct answers</p>
        </div>
        <div style={{ minWidth: '120px' }}>
          <h2>{props.impTotal}</h2>
          <p>Total answers</p>
        </div>
      </div>
    </div>
  );
}

export default ImperfectTense;
