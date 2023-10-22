import React from 'react';
import { connect} from 'react-redux'
const Test = ({ count, increment, decrement }) => {
    return (
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  };
  
  const mapStateToProps = (state) => ({
    count: state,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Test);