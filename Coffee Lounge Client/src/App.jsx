
// import { useLoaderData } from 'react-router-dom'
import './App.css'
// import CoffeeCard from './components/CoffeeCard';
// import { useState } from 'react';

function App() {

  // const loadedCoffees = useLoaderData();
  // const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className='m-20'>
      {/* <h1 className='my-20 text-6xl text-center text-purple-600'>Hot Hot Cold Coffee: {coffees.length}</h1> */}
      <div className='grid gap-4 md:grid-cols-2'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, suscipit?</p>
        {/* {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>)
        } */}
      </div>
    </div>
  )
}

export default App
