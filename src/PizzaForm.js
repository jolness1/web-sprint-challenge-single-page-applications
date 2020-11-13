import React from "react";

export default function PizzaForm(props) {
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target
        const correctValue = type === "checkbox" ? checked : value;
        change(name, correctValue);
    };

    return (
        <form className="form container" onSubmit={onSubmit}>
            <div className="form-pizza submit">
                <h2>Welcome to Luigis!</h2>
                <button disabled={disabled}>submit</button>
                <div className="errors">
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                </div>
            </div>


            {/* Text Input for Order Name */}

            <div className="form-group inputs">
                <h4>Order a Pizza</h4>
                <label>
                    Order Name
                    <input
                        value={values.name}
                        onChange={onChange}
                        name="name"
                        type="text"
                    />
                </label>

                {/* Dropdowns for pizza size   */}

                <label>
                    Pie Size
                    <select onChange={onChange} value={values.crust} name="size">
                        <option value="">- Select an option -</option>
                        <option value="child">Child</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </label>
            </div>

                {/* Checkboxes for Toppings */}

                <div className="form-group checkboxes">
                <h4>Toppings</h4>

                <label>
                    Pinapple (It DOES go on Pizza)
                     <input
                        type="checkbox"
                        name="pineapple"
                        checked={values.pineapple}
                        onChange={onChange}
                        />
                    </label>

                <label>
                    Pepperoni
                    <input
                        type="checkbox"
                        name="pepperoni"
                        checked={values.pepperoni}
                        onChange={onChange}
                        />
                </label>
                <label>
                    Onions
                    <input
                        type="checkbox"
                        name="onions"
                        checked={values.onions}
                        onChange={onChange}
                        />
                </label>
                <label>
                    Italian Sausage
                    <input
                        type="checkbox"
                        name="sausage"
                        checked={values.sausage}
                        onChange={onChange}
                        />
                </label>

                {/* Special Instructions Text Box */}

                <label>
                    Special Instructions
                    <input
                        value={values.instruction}
                        onChange={onChange}
                        name="instruction"
                        type="text"
                    />
                </label>
            </div>
        </form>
    )

}