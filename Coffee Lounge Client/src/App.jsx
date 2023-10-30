
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
// import { useState } from 'react';

function App() {

  // const loadedCoffees = useLoaderData();
  // const [coffees, setCoffees] = useState(loadedCoffees);

  const coffees = useLoaderData();

  return (
    <div className='m-20'>
      <h1 className='my-20 text-6xl text-center text-purple-600'>Hot Hot Cold Coffee: {coffees.length}</h1>
      <div className='grid gap-4 md:grid-cols-2'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
          ></CoffeeCard>)
          // setCoffees={setCoffees}
        }
      </div>
    </div>
  )
}

export default App
