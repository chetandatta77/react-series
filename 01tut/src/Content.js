import { useState } from 'react';

const Content = () => {

    const [name, setName] = useState('Dave');
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const number = Math.floor(Math.random()*3);
        setName(names[number]);
      }

    const handleClick = ()=>{
        setCount(count+1);
        setCount(count+1);
        console.log(count);
    }

    const handleClick1 = () => {
        console.log(count);
    }


    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {name}
            </p>
            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={handleClick}>Increment count</button>
            <button onClick={handleClick1}>Count state</button>

        </main>
    )
}

export default Content