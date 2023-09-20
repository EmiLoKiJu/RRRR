import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGreeting } from '../redux/greetings/greetingsSlice';

const Greeting = ({ message, fetchGreeting }) => {
  useEffect(() => {
    fetchGreeting();
  }, [fetchGreeting]);

  return (
    <div>
      <h1>Greeting</h1>
      <p>{message}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  message: state.greeting.message,
});

export default connect(mapStateToProps, { fetchGreeting })(Greeting);