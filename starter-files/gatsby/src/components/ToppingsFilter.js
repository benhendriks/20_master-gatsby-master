import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';

const ToppingsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    align-items: center;
    padding: 5px;
    background: var(--grey);
    border-radius: 2px;
    .count {
      background: white;
      padding: 2px 5px;      
    }
    .active {
      background: var(--yellow);
    }
  }
`;

function countPizzasInToppings(pizzas) {
  //Return the pizzas with counts 
  const counts = pizzas
  .map(pizza => pizza.toppings)
  .flat()
  .reduce((acc, topping) => {
    //check if this is an existing topping
    const existingTopping = acc[topping.id];
    if(existingTopping) {
    //if it is, increment it by 1
    existingTopping.count += 1; 
    }
    //otherwise create a new entry in our acc and set it to one
    else {
      acc[topping.id] = {
        id: topping.id,
        name: topping.name,
        count: 1,
      };
    }
    return acc;
  }, {});
  //sort them based on their count
  const sortedToppings = Object.values(counts).sort((a,b) => b.count - a.count);
  return sortedToppings;
}

export default function ToppingFilter() {
//Get a list of all the toppings
//Get a list of all the pizzas with their toppings
const { toppings, pizzas } = useStaticQuery(graphql`
  query {
    toppings: allSanityTopping {
      nodes {
        name
        id
        vegetarian
      }
    }
    pizzas: allSanityPizza {
      nodes {
        toppings {
          name
          id
        }
      }
    }
  }
`);
  //Count how many pizzas are in each topping
  const toppingsWithCounts = countPizzasInToppings(pizzas.nodes);
  console.log(toppingsWithCounts);
  //Loop over the list of toppings and display the topping and the count of pizzasin that topping 
  //Link it up...
  return (
    <ToppingsStyles>
      {toppingsWithCounts.map((topping) => (
        <Link to={`/topping/${topping.name}`} key={topping.id}>
          <span className="name">{topping.name}</span>
          <span className="count">{topping.count}</span>
        </Link>
      ))};
    </ToppingsStyles>
  );
} 