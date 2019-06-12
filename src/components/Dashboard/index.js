import React, { useState, useEffect } from 'react';
import Charts from './Charts';
import { useQuery } from 'react-apollo-hooks';
import { GET_MY_INFO } from '../GqlQueries/userQueries';
import PresentTense from './Tenses/PresentTense';
import PreteriteTense from './Tenses/PreteriteTense';
import ImperfectTense from './Tenses/ImperfectTense';
import ImpDummy from './Tenses/ImperfectTense/impDummy';
import PresentDummy from './Tenses/PresentTense/presentDummy';
import PretDummy from './Tenses/PreteriteTense/pretDummy';

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

  let header;
  if (Object.values(data).length > 0) {
    header = (
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to your student dashboard {data.me.name}!</h1>
        <h3>Track your progress.</h3>
      </div>
    );
  } else {
    header = (
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to your student dashboard</h1>
        <h3>
          This is dummy data.{' '}
          <a href="https://www.conjugator.io/login/">Sign-up here</a> to gain
          insights into your progress.
        </h3>
      </div>
    );
  }

  return (
    <div>
      {header}
      <div style={{ margin: '0 auto', maxWidth: '600px' }}>
        <Charts data={data} />
        {Object.values(data).length > 0 ? (
          <div>
            <PresentTense
              presentTotal={presentTotal}
              presentCorrect={presentCorrect}
            />
            <PreteriteTense pretTotal={pretTotal} pretCorrect={pretCorrect} />
            <ImperfectTense impTotal={impTotal} impCorrect={impCorrect} />{' '}
          </div>
        ) : (
          <div>
            <PresentDummy /> <PretDummy /> <ImpDummy />{' '}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
