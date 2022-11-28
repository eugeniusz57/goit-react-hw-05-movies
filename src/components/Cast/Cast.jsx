import { useEffect } from 'react';
import { useState } from 'react';
import { Box } from '../Box';
import { getMovieCredits } from '../../fetchAPI';
import { useParams } from 'react-router-dom';
import noImg from '../../image/image-not-available.jpg';
import { Img, List, ListItem, Text } from './Cast.styled';
import { Loader } from '../Loader/Loader';

const Cast = () => {
  const [cast, setCast] = useState('');
  const { moviesId } = useParams();
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!moviesId) {
      return;
    }
    setStatus('pending');
    getMovieCredits(moviesId)
      .then(res => {
        setCast(res);
        setStatus('resolv');
      })
      .catch(err => console.error(err));
  }, [moviesId]);
  return (
    <Box display="flex">
      {status === 'pending' && <Loader />}
      {(status === 'resolv' || status === 'pending') && cast && (
        <List>
          {cast.map(({ cast_id, character, name, profile_path }) => {
            return (
              <ListItem key={cast_id}>
                <Img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : noImg
                  }
                  alt={character}
                />
                <Text>
                  <b>{name}</b>
                </Text>
                <Text>
                  <b>Character: </b>
                  {character}
                </Text>
              </ListItem>
            );
          })}
          {cast?.length === 0 && (
            <div>We don't have any casts for this movie</div>
          )}
        </List>
      )}
    </Box>
  );
};

export default Cast;
