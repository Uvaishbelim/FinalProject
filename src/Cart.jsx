// Cart.jsx

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Cart = () => {

    const [cart, setCart] = useState([]);
    const [pr, setPr] = useState([]);

    // PRODUCTS + CART DATA
    useEffect(() => {

        axios.get("http://localhost:3000/products")
            .then((res) => setPr(res.data))

        axios.get("http://localhost:3000/addToCart")
            .then((res) => setCart(res.data))

    }, [])


    // + BUTTON
    const plusQty = (id, qty) => {

        axios.patch(`http://localhost:3000/addToCart/${id}`, {
            qty: qty + 1
        }).then(() => {

            axios.get("http://localhost:3000/addToCart")
                .then((res) => setCart(res.data))

        })

    }


    // - BUTTON
    const minusQty = (id, qty) => {

        if (qty > 1) {

            axios.patch(`http://localhost:3000/addToCart/${id}`, {
                qty: qty - 1
            }).then(() => {

                axios.get("http://localhost:3000/addToCart")
                    .then((res) => setCart(res.data))

            })

        }

    }


    // DELETE PRODUCT
    const deleteProduct = (id) => {

        axios.delete(`http://localhost:3000/addToCart/${id}`)
            .then(() => {

                axios.get("http://localhost:3000/addToCart")
                    .then((res) => setCart(res.data))

            })

    }


    return (
        <>
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Cart</h1>
            </div>

            <div className="container-fluid py-5">
                <div className="container py-5">

                    <div className="table-responsive">

                        <table className="table">

                            <thead>
                                <tr>
                                    <th>Products</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Handle</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    cart.map((i) => {

                                        return pr.map((j) => {

                                            // MATCH PRODUCT ID
                                            if (i.pid == j.id) {

                                                return (
                                                    <tr key={i.id}>

                                                        <th scope="row">
                                                            <div className="d-flex align-items-center">

                                                                <img
                                                                    src={j.image}
                                                                    className="img-fluid me-5 rounded-circle"
                                                                    style={{ width: 80, height: 80 }}
                                                                    alt=""
                                                                />

                                                            </div>
                                                        </th>

                                                        <td>
                                                            <p className="mb-0 mt-4">
                                                                {j.pname}
                                                            </p>
                                                        </td>

                                                        <td>
                                                            <p className="mb-0 mt-4">
                                                                ${j.price}
                                                            </p>
                                                        </td>

                                                        <td>

                                                            <div
                                                                className="input-group quantity mt-4"
                                                                style={{ width: 120 }}
                                                            >

                                                                <button
                                                                    className="btn btn-sm btn-minus rounded-circle bg-light border"
                                                                    onClick={() => minusQty(i.id, i.qty)}
                                                                >
                                                                    <i className="fa fa-minus" />
                                                                </button>

                                                                <input
                                                                    type="text"
                                                                    className="form-control form-control-sm text-center border-0"
                                                                    value={i.qty}
                                                                    readOnly
                                                                />

                                                                <button
                                                                    className="btn btn-sm btn-plus rounded-circle bg-light border"
                                                                    onClick={() => plusQty(i.id, i.qty)}
                                                                >
                                                                    <i className="fa fa-plus" />
                                                                </button>

                                                            </div>

                                                        </td>

                                                        <td>
                                                            <p className="mb-0 mt-4">
                                                                ${Number(j.price) * i.qty}
                                                            </p>
                                                        </td>

                                                        <td>

                                                            <button
                                                                className="btn btn-md rounded-circle bg-light border mt-4"
                                                                onClick={() => deleteProduct(i.id)}
                                                            >
                                                                <i className="fa fa-times text-danger" />
                                                            </button>

                                                        </td>

                                                    </tr>
                                                )

                                            }

                                        })

                                    })
                                }

                            </tbody>

                        </table>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Cart