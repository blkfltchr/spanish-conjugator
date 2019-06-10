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
  { name: 'Jan', correct: 140, answers: 290 },
  { name: 'Feb', correct: 308, answers: 472 },
  { name: 'Mar', correct: 420, answers: 612 },
  { name: 'Apr', correct: 312, answers: 543 },
  { name: 'May', correct: 186, answers: 328 },
  { name: 'Jun', correct: 167, answers: 391 },
  { name: 'Jul', correct: 231, answers: 259 },
  { name: 'Aug', correct: 520, answers: 627 },
  { name: 'Sep', correct: 312, answers: 454 },
  { name: 'Oct', correct: 189, answers: 321 },
  { name: 'Nov', correct: 167, answers: 391 },
  { name: 'Dec', correct: 123, answers: 215 }
];

function YearDummy() {
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
            <XAxis
              dataKey="name"
              padding={{ left: 15, right: 15 }}
              interval={2}
            />
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

export default YearDummy;
