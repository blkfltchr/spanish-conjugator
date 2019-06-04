import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../styled/Button';
import Charts from './Charts';
import { useQuery } from 'react-apollo-hooks';
import { GET_MY_INFO } from '../GqlQueries/userQueries';
import PresentTense from './Tenses/PresentTense';
import PreteriteTense from './Tenses/PreteriteTense';
import ImperfectTense from './Tenses/ImperfectTense';

function Dashboard() {
  const [presentCorrect, setPresentCorrect] = useState('');
  const [presentTotal, setPresentTotal] = useState('');
  const [pretCorrect, setPretCorrect] = useState(0);
  const [pretTotal, setPretTotal] = useState(0);
  const [impCorrect, setImpCorrect] = useState('');
  const [impTotal, setImpTotal] = useState('');

  const { data } = useQuery(GET_MY_INFO);

  useEffect(() => {
    if (Object.values(data).length > 0) {
      const present = data.me.logs.filter(val => {
        return val.tense === 'Present';
      });
      const presentCor = present.filter(val => {
        return val.correct === true;
      });
      setPresentCorrect(Object.values(presentCor).length);
      setPresentTotal(Object.values(present).length);

      const pret = data.me.logs.filter(val => {
        return val.tense === 'Preterite';
      });
      const pretCor = pret.filter(val => {
        return val.correct === true;
      });
      setPretCorrect(Object.values(pretCor).length);
      setPretTotal(Object.values(pret).length);

      const imperfect = data.me.logs.filter(val => {
        return val.tense === 'Imperfect';
      });
      const impCor = imperfect.filter(val => {
        return val.correct === true;
      });
      setImpCorrect(Object.values(impCor).length);
      setImpTotal(Object.values(imperfect).length);
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
        <PresentTense
          presentTotal={presentTotal}
          presentCorrect={presentCorrect}
        />
        <PreteriteTense pretTotal={pretTotal} pretCorrect={pretCorrect} />
        <ImperfectTense impTotal={impTotal} impCorrect={impCorrect} />
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
