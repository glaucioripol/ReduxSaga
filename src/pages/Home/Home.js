import React, { useEffect } from 'react';
import './Home.scss';
import { useDispatch, useSelector } from 'react-redux';
import { recuperarPersonagensRequest } from '../../redux/Characters/Retrieve/actions';

import { Card } from '../../components/Card';


const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.crudCharacters.charactersRetrieveReducer);
  useEffect(() => { dispatch(recuperarPersonagensRequest()); }, [])
  return (
    <>
      <div className="content">
        {data.results.map(val => {
          const {
            id, image, name, status, species, gender,
          } = val;
          return (
            < Card
              id={id}
              image={image}
              name={name}
              status={status}
              species={species}
              gender={gender}
            />
          )
        })}
      </div>
    </>
  )
}

export default Home;
