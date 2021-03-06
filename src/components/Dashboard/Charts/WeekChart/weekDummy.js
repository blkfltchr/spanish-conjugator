import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Mon', correct: 40, answers: 90 },
  { name: 'Tue', correct: 30, answers: 72 },
  { name: 'Wed', correct: 20, answers: 62 },
  { name: 'Thu', correct: 12, answers: 54 },
  { name: 'Fri', correct: 18, answers: 32 },
  { name: 'Sat', correct: 23, answers: 25 },
  { name: 'Sun', correct: 24, answers: 56 }
];

function WeekDummy() {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const correct = () => {
    const correct = data.map(data => data.correct);
    return correct.reduce(reducer);
  };

  const answers = () => {
    const answers = data.map(data => data.answers);
    return answers.reduce(reducer);
  };

  return (
    <div
      style={{
        textAlign: 'left',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <div style={{ width: '100px' }}>
        <div>
          <h2>{`${((correct() / answers()) * 100).toFixed(1)} %`}</h2>
          <p>Percent</p>
        </div>
        <div>
          <h2>{correct()}</h2>
          <p>Correct answers</p>
        </div>
        <div>
          <h2>{answers()}</h2>
          <p>Total answers</p>
        </div>
      </div>
      <div style={{ width: '100%', height: '300px' }}>
        <ResponsiveContainer>
          <AreaChart width={600} height={200} data={data} syncId="anyId">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 15, right: 15 }} />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="answers" />
            <Area type="monotone" dataKey="correct" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default WeekDummy;
