import React, { useState } from 'react'
import axios from 'axios'

const Home = () => {
    const [name, setName] = useState('x');
    const [building, setBuilding] = useState('x');
    const [so, setSo] = useState('x');
    const [booth, setBooth] = useState('x');
    const [id, setId] = useState('x');
    const [showResults, setShowResults] = useState(false);
    const handle = async() => {
        let data = await axios.get(`https://electionapp.onrender.com/voter/get/${name}/${building}/${id}/${so}/${booth}`);
        console.log(data);
        setShowResults(true);

    }
  return (
    <section className='bg-gray-50'>
        <div className='input'>
            <button onClick={handle}>Click</button>
        </div>
        {showResults && <div className='result'>
            hey
        </div>}
    </section>
  )
}

export default Home