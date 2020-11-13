import React, { useState, useEffect } from "react";
import Pizza from "./Pizza";
import PizzaForm from "./PizzaForm";
import schema from "./FormSchema";
import axios from "axios";
import * as yup from "yup";

// initial states for form 

const initialFormValues = {
  name: "",
  size: "",
  pineapple: false,
  pepperoni: false,
  onions: false,
  sausage: false,
  instruction: "",
};

const initialFormErrors = {
  name: "",
  size: "",
}

const initialPizza = [];
const initialDisabled = true;


export default function App() {
  /////STATES\\\\\
  const [pizza, setpizza] = useState(initialPizza); // array of Pizza objects
  const [formValues, setFormValues] = useState(initialFormValues); // object
  const [formErrors, setFormErrors] = useState(initialFormErrors); // object
  const [disabled, setDisabled] = useState(initialDisabled); // boolean
  
  ////////// Axios
  ///////////////Post
  ////////// Axios
  const postNewPizza = (newPizza) => {
    axios
    .post("https://reqres.in/api/users", newPizza)
    .then((res) => {
      console.log(newPizza);
      setpizza([res.data.data, ...pizza]);
      setFormValues(initialFormValues);
    })
    .catch((err) => {
      console.log(err);
    });
  };
  
  ///////////////Get
  const getPizza = () => {
    axios
    .get("https://reqres.in/api/users")
    .then((res) => {
      debugger;
      // console.log(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };
  
  

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })
      setFormValues({
        ...formValues,
        [name]: value,
      })
  };


  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: ["pineapple", "pepperoni", "onions", "sausage" ].filter((top) => formValues[top]),
      instruction: formValues.instruction,
    };
    postNewPizza(newPizza);
  };

  ///////side effects

  useEffect(() => {
    getPizza();
  
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) =>{
      setDisabled(!valid);
    });
  }, [formValues]);

  return(
    <div className="container">
      <header>
        <h1>PIZZA TIIIIME</h1>
      </header>

      <PizzaForm
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      />

      {pizza.map((pizza) => {
        console.log(pizza.id)
        return <Pizza key={pizza.id} details={pizza} />;
      })}

    </div>
  );

}
