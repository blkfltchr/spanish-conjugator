import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../styled/Button';
import Charts from './Charts';
import Tenses from './Tenses';
import { useQuery } from 'react-apollo-hooks';
import { GET_MY_INFO } from '../GqlQueries/userQueries';
import PresentTense from './Tenses/PresentTense';
import PreteriteTense from './Tenses/PreteriteTense';
import ImperfectTense from './Tenses/ImperfectTense';

function Dashboard() {
  const [correctAnswers, setCorrectAnswers] = useState('');
  const [totalAnswers, setTotalAnswers] = useState('');
  const [totalNum, setTotalNum] = useState(0);
  const [correctNum, setCorrectNum] = useState(0);
  const { data } = useQuery(GET_MY_INFO);

  useEffect(() => {
    if (Object.values(data).length > 0) {
      setTotalAnswers(data.me.logs);
      setTotalNum(Object.values(data.me.logs).length);
      const cor = data.me.logs.filter(val => {
        return val.correct === true;
      });
      setCorrectAnswers(cor);
      setCorrectNum(Object.values(cor).length);
    }
  }, [data]);

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>
          Welcome to your student dashboard
          {data.length > 0 ? `, ${data.me.name}!` : null}
        </h1>
        <h3>Track your progress.</h3>
      </div>
      <div style={{ margin: '0 auto', maxWidth: '600px' }}>
        <Charts />
        {/* <Tenses loading={loading} id={id} /> */}
        <PresentTense totalNum={totalNum} correctNum={correctNum} />
        <PreteriteTense totalNum={totalNum} correctNum={correctNum} />
        <ImperfectTense totalNum={totalNum} correctNum={correctNum} />
        <Button>
          <Link to="/">
            <button type="button">Start conjugating</button>
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Dashboard;
