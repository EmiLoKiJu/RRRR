import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getGreetings } from '../redux/greetings/greetingsSlice';

const Greeting = ({ message, getGreetings }) => {
  useEffect(() => {
    getGreetings();
  }, [getGreetings]);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  message: state.greetings.message,
});

export default connect(mapStateToProps, { getGreetings })(Greeting);