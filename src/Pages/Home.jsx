import React, { useEffect, useState } from 'react';
import Master from './Layout/Master';
import Loader from '../Components/Loader';
import axios from 'axios'

export default function Home(props) {

    const [loader, setLoader] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products').then(res => {
            setProducts(res.data.products);
            setLoader(false);
        })
    }, [])

    const renderCart = (product) => {
        var findProduct = props.cart.find(d => {
            return d.title == product.title
        })
        if (findProduct) {
            findProduct.qty += 1;
        } else {
            product.qty = 1;
            props.setCart([...props.cart, product])
        }
    }

    return (
        <Master {...props}>
            {loader && <Loader />}
            {
                !loader && (
                    <div className='col-md-12'>
                        <div className='row'>
                            {products.map(d => {
                                return (
                                    <div className='col-md-4' key={d.id}>
                                        <div className="card">
                                            <img src={d.thumbnail} className="card-img-top" alt="..." width={100} height={200} />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {d.title}
                                                </h5>
                                                <p className="card-text">
                                                    {d.description}
                                                </p>
                                                <p>
                                                    {d.price}
                                                    KS
                                                </p>
                                                <button className="btn btn-primary"
                                                    onClick={() => renderCart(d)}
                                                >
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            }
        </Master>
    )
}
