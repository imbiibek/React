import React from 'react'
import Product from './Product';


const App = () => {

  const employee = [
    {
      name: "Raj",
      salary: 20000
    },
    {
      name: "Ajay",
      salary: 30000
    }
  ];

  const mapEmployee = employee.map((item) => `${item.name}, ${item.salary}`);
  const totalSalary = employee.reduce((acc, item) => acc + item.salary, 0);

  return (
    <div>
      {mapEmployee.map((str, index) => (
        <p key={index}>{str}</p>
      ))}

      {employee
        .filter((item) => item.salary > 20000)
        .map((item, index) => (
          <p key={index}>{item.name}, {item.salary}</p>
        ))}

      <p className='text-amber-300'>Total salary: {totalSalary}</p>


      <Product title="Laptop" price={55000} />
      <Product title="Phone" price={25000} />


    </div>
  )
};


export default App

