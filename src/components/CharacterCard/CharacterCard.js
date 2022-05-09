import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { fetchById } from '../../services/fetchApi';



export default function CharacterCard() {
  const history = useHistory('');
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    const info = async () => {
      const data = await fetchById(id);
      setDetail(data);
    };
    info();
  }, [id]);

  const goBack = async () => {
    history.push('/');
  };

  return (
    <article>
      <div>
        <img alt={`Image of ${detail.name}`} src={detail.image} />
        <h2>{detail.name}</h2>
        <h3>{detail.status}</h3>
        <h4>{detail.species}</h4>
        <h5>{detail.type}</h5>
        <h5>{detail.gender}</h5>
        <button onClick={goBack}>Return to Home Page</button>
      </div>
    </article>
  );
}
