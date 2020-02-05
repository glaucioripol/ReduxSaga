import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { recuperarPersonagensRequest } from '../redux/Characters/Retrieve/actions';

const Testae = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.crudCharacters.charactersRetrieveReducer);
  useEffect(() => { dispatch(recuperarPersonagensRequest()); }, [])
  return (
    <>
      {JSON.stringify(data.results)}
    </>
  )
}

export { Testae };
