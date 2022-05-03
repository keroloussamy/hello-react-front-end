import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetingsThunk } from '../redux/greetings';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetingsThunk());
  }, [dispatch]);

  const greeting = useSelector((state) => state.greetings);
  return (
    <div>
      Greeting:
      {greeting.message}
    </div>
  );
};

export default Greeting;
