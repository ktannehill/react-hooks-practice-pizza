import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [selectedPizza, setSelectedPizza] = useState({})

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then(resp => resp.json())
    .then(setPizzas)
    .catch(err => alert(err))
  }, [])

  const handleSelectPizza = (pizza) => {
    setSelectedPizza(pizza)
  }

  const handleEditPizza = (updatedPizza) => {
    setPizzas(pizzas.map(pizza => pizza.id === updatedPizza.id ? updatedPizza : pizza))
  }

  return (
    <>
      <Header />
      <PizzaForm selectedPizza={selectedPizza} handleEditPizza={handleEditPizza} />
      <PizzaList pizzas={pizzas} handleSelectPizza={handleSelectPizza} />
    </>
  );
}

export default App;
