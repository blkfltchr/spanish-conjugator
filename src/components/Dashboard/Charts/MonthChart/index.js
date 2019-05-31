import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: '06/01/19', correct: 40, answers: 90 },
  { name: '06/02/19', correct: 30, answers: 72 },
  { name: '06/03/19', correct: 20, answers: 62 },
  { name: '06/04/19', correct: 12, answers: 54 },
  { name: '06/05/19', correct: 18, answers: 32 },
  { name: '06/06/19', correct: 23, answers: 25 },
  { name: '06/07/19', correct: 24, answers: 56 },
  { name: '06/08/19', correct: 0, answers: 0 },
  { name: '06/09/19', correct: 0, answers: 0 },
  { name: '06/10/19', correct: 0, answers: 0 },
  { name: '06/11/19', correct: 0, answers: 0 },
  { name: '06/12/19', correct: 30, answers: 72 },
  { name: '06/13/19', correct: 20, answers: 62 },
  { name: '06/14/19', correct: 12, answers: 54 },
  { name: '06/15/19', correct: 18, answers: 32 },
  { name: '06/16/19', correct: 0, answers: 0 },
  { name: '06/17/19', correct: 0, answers: 0 },
  { name: '06/18/19', correct: 39, answers: 82 },
  { name: '06/19/19', correct: 12, answers: 34 },
  { name: '06/20/19', correct: 12, answers: 34 },
  { name: '06/21/19', correct: 40, answers: 90 },
  { name: '06/22/19', correct: 30, answers: 72 },
  { name: '06/23/19', correct: 20, answers: 62 },
  { name: '06/24/19', correct: 12, answers: 54 },
  { name: '06/25/19', correct: 18, answers: 32 },
  { name: '06/26/19', correct: 23, answers: 25 },
  { name: '06/27/19', correct: 12, answers: 34 },
  { name: '06/28/19', correct: 12, answers: 34 },
  { name: '06/29/19', correct: 12, answers: 34 },
  { name: '06/30/19', correct: 12, answers: 34 },
];

function MonthlyChart() {
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
        alignItems: 'center',
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
              interval={6}
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

export default MonthlyChart;
