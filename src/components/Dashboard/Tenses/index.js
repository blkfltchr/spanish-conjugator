import React, { useState } from 'react';
import PresentTense from './PresentTense';
import PreteriteTense from './PreteriteTense';
import ImperfectTense from './ImperfectTense';
import { useQuery } from 'react-apollo-hooks';
import { GET_LOGS } from '../../GqlQueries/userQueries';

function Tenses(props) {
  // const [userData, setUserData] = useState('');
  // console.log('Props from tenses..', props);
  if (props.id.length > 0) {
    const { loading, data } = useQuery(GET_LOGS, {
      variables: {
        id: props.id
      }
    });
    console.log('Data from tenses..', data);
  }
  //   // if (!loading) {
  //   // setUserData(data);
  //   // }
  //   console.log('Data from tenses get logs..', data);
  // }
  // console.log('userData -->', userData);
  return (
    <div>
      <PresentTense />
      <PreteriteTense />
      <ImperfectTense />
    </div>
  );
}

export default Tenses;
