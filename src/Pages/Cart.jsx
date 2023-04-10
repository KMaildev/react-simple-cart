import React from 'react'
import Master from './Layout/Master'

export default function Cart(props) {
    const renderReduce = (product) => {
        props.setCart(prevState => prevState.map(d => {
            if (d.title === product.title) {
                var updateQty = d.qty - 1;
                return { ...d, qty: updateQty };
            }
            return d;
        }))
    };

    const renderAdd = (product) => {
        props.setCart(prevState => prevState.map(d => {
            if (d.title === product.title) {
                var updateQty = d.qty + 1;
                return { ...d, qty: updateQty };
            }
            return d;
        }))
    };

    return (
        <Master {...props}>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Total</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.cart.map(d => {
                            return (
                                <tr key={d.id}>
                                    <td>{d.title}</td>
                                    <td>{d.price}</td>
                                    <td>{d.qty}</td>
                                    <td>{d.qty * d.price}</td>
                                    <td>
                                        <span onClick={() => renderReduce(d)}
                                            className="badge bg-primary mb-2">
                                            -
                                        </span>

                                        <span onClick={() => renderAdd(d)}
                                            className="badge bg-success mb-2">
                                            +
                                        </span>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </Master>
    )
}
