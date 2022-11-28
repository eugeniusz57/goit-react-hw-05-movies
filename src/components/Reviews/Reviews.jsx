import { Box } from '../Box';
import { useEffect } from 'react';
import { useState } from 'react';
import { getMovieReviews } from '../../fetchAPI';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const { moviesId } = useParams();
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!moviesId) {
      return;
    }
    setStatus('pending');
    getMovieReviews(moviesId)
      .then(res => {
        setReviews(res);
        setStatus('resolv');
      })
      .catch(err => console.error(err));
  }, [moviesId]);
  return (
    <Box>
      {status === 'pending' && <Loader />}
      <ul>
        {(status === 'resolv' || status === 'pending') &&
          reviews &&
          reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>Author {author}</p>
                <p>{content}</p>
              </li>
            );
          })}
        {reviews?.length === 0 && (
          <div>We don't have any reviews for this movie</div>
        )}
      </ul>
    </Box>
  );
};

export default Reviews;
