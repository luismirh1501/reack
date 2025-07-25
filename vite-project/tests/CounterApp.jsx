import { useState  } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

    const [ counter , setcounter] = useState(value);

    const handleAdd = () =>{
        /* setcounter(counter +1); */
        setcounter((c)=> c+1);
    }
    const handleRest = () =>{
        /* setcounter(counter +1); */
        setcounter((c)=> c-1);
    }
    const reset = () =>{
        /* setcounter(counter +1); */
        setcounter(value);
    }
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleRest }>-1</button>
            <button onClick={ reset }>RESET</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}


1