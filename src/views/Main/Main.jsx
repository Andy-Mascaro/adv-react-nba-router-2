import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import { fetchApi } from '../../services/fetchApi';

export default function Main() {
  const [characters, setCharacters] = useState([]);
  const { url, path } = useRouteMatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchApi();
      setCharacters(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <div className="loading">...loading</div>;

  return (
    <>
      <div>
        <h1>List of Characters</h1>
        {characters.map((character) => (
            <div key={character.id}>
            <Link to={`${url}/${character.id}`}>{character.name}</Link>
            {/* <CharacterCard key={character.id} character={character}/> */}
            </div>
        ))}
        <Route path={`${path}/:id`}>
          <CharacterCard />
        </Route>
      </div>
    </>
  );
}
