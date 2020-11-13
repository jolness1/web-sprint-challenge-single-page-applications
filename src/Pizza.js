import React from "react";

function Pizza({ details }) {
    if(!details) {
        return <h3>Looking through our floppy disks for your order...</h3>
    }

    return (
        <div ClassName='pizza container'>
            <h2>Customer Name: {details.name}</h2>
            <p>Crust Size: {details.size}</p>
            {
                !!details.toppings && !!details.toppings.lenngth &&
                <div>
                    Toppings:
                    <ul>
                        {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
                    </ul>
                </div>
            }
            <p>Special Instructions: {details.instruction}</p>
        </div>
    )
}

export default Pizza