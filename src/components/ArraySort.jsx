import { useState, useEffect } from "react";

const ArraySort = () =>{

    const [numbers, setNumbers] = useState([5,3,6,7,8,1,9,3,0]);
    const [direction, setDirection] = useState('asc');

    useEffect(() =>{
        sortNumbers();
    }, []);

    const sortNumbers = () => {
        const sortedNumbers = [... numbers];
        if(direction === 'asc'){
            sortedNumbers.sort((a,b) => b-a);
            setDirection('desc');
        } else {
            sortedNumbers.sort((a,b)=> a-b);
            setDirection('asc');
        }
        setNumbers(sortedNumbers);
    }

    return (
        <div className='text-right'>
            <h3>Numbers:</h3>
            <p>{numbers.join(', ')}</p>
            <button onClick={sortNumbers} className="">Re-Sort</button> <small>{direction}</small>
        </div>
    )

}

export default ArraySort;