import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { recuperarPersonagensRequest } from '../redux/Characters/Retrieve/actions';

const Testae = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState();

  useSelector(state => setData(state.crudCharacters.charactersRetrieveReducer));
  useEffect(() => { dispatch(recuperarPersonagensRequest()); })

  return (
    <>
      {JSON.stringify(data)}
    </>
  )
}

export { Testae };
