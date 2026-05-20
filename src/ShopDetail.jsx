// ShopDetail.jsx

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ShopDetail = () => {

    // URL SE ID
    const { id } = useParams()
    // SINGLE PRODUCT
    const [product, setProduct] = useState({})
    // ALL PRODUCTS
    const [pr, setPr] = useState([])
    // CATEGORY
    const [cat, setCat] = useState([])
    // QUANTITY
    const [qty, setQty] = useState(1)
    // PAGE LOAD
    useEffect(() => {
        // SINGLE PRODUCT FETCH
        axios.get(`http://localhost:3000/products/${id}`)
            .then((res) => setProduct(res.data))
        // ALL PRODUCTS FETCH
        axios.get("http://localhost:3000/products")
            .then((res) => setPr(res.data))
        // CATEGORY FETCH
        axios.get("http://localhost:3000/category")
            .then((res) => setCat(res.data))
    }, [id])
    // PLUS QTY
    const plusQty = () => {
        setQty(qty + 1)
    }
    // MINUS QTY
    const minusQty = () => {
        if (qty > 1) {
            setQty(qty - 1)
        }
    }
    // ADD TO CART
    const addToCart = () => {
        // CHECK PRODUCT ALREADY EXISTS
        axios.get(`http://localhost:3000/addToCart?pid=${product.id}`)
            .then((res) => {
                // PRODUCT ALREADY EXISTS
                if (res.data.length > 0) {
                    let oldData = res.data[0]
                    axios.patch(
                        `http://localhost:3000/addToCart/${oldData.id}`,
                        {
                            qty: oldData.qty + qty
                        }
                    )

                }

                // NEW PRODUCT
                else {

                    axios.post("http://localhost:3000/addToCart", {
                        pid: product.id,
                        qty: qty
                    })

                }

            })

    }



    return (
        <>

            {/* HEADER */}

            <div className="container-fluid page-header py-5">

                <h1 className="text-center text-white display-6">
                    Shop Detail
                </h1>

            </div>





            {/* PRODUCT SECTION */}

            <div className="container-fluid py-5 mt-5">

                <div className="container py-5">

                    <div className="row g-4">



                        {/* LEFT SIDE */}

                        <div className="col-lg-8 col-xl-9">

                            <div className="row g-4">



                                {/* IMAGE */}

                                <div className="col-lg-6">

                                    <div className="border rounded">

                                        <img
                                            src={product.image}
                                            className="img-fluid rounded w-100"
                                            alt=""
                                        />

                                    </div>

                                </div>





                                {/* DETAILS */}

                                <div className="col-lg-6">

                                    {/* PRODUCT NAME */}

                                    <h4 className="fw-bold mb-3">
                                        {product.pname}
                                    </h4>



                                    {/* CATEGORY */}

                                    <p className="mb-3">

                                        Category :

                                        {
                                            cat.map((c) => {

                                                if (c.id == product.catId) {
                                                    return (
                                                        <span key={c.id}>
                                                            {" "}{c.name}
                                                        </span>
                                                    )
                                                }

                                            })
                                        }

                                    </p>



                                    {/* PRICE */}

                                    <h5 className="fw-bold mb-3">
                                        ${product.price}
                                    </h5>



                                    {/* STARS */}

                                    <div className="d-flex mb-4">

                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star" />

                                    </div>



                                    {/* DESCRIPTION */}

                                    <p className="mb-4">
                                        {product.desc}
                                    </p>





                                    {/* QUANTITY */}

                                    <div
                                        className="input-group quantity mb-5"
                                        style={{ width: 120 }}
                                    >

                                        {/* MINUS */}

                                        <button
                                            className="btn btn-sm btn-minus rounded-circle bg-light border"
                                            onClick={minusQty}
                                        >

                                            <i className="fa fa-minus" />

                                        </button>



                                        {/* INPUT */}

                                        <input
                                            type="text"
                                            className="form-control form-control-sm text-center border-0"
                                            value={qty}
                                            readOnly
                                        />



                                        {/* PLUS */}

                                        <button
                                            className="btn btn-sm btn-plus rounded-circle bg-light border"
                                            onClick={plusQty}
                                        >

                                            <i className="fa fa-plus" />

                                        </button>

                                    </div>





                                    {/* ADD TO CART */}

                                    <button
                                        className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"
                                        onClick={addToCart}
                                    >

                                        <i className="fa fa-shopping-bag me-2 text-primary" />

                                        Add to cart

                                    </button>

                                </div>

                            </div>

                        </div>





                        {/* RIGHT SIDE */}

                        <div className="col-lg-4 col-xl-3">

                            <div className="row g-4 fruite">



                                {/* CATEGORY */}

                                <div className="col-lg-12">

                                    <div className="mb-4">

                                        <h4>Categories</h4>

                                        <ul className="list-unstyled fruite-categorie">

                                            {
                                                cat.map((i) => {

                                                    return (

                                                        <li key={i.id}>

                                                            <div className="d-flex justify-content-between fruite-name">

                                                                <a href="#">
                                                                    <i className="fas fa-apple-alt me-2" />

                                                                    {i.name}
                                                                </a>

                                                            </div>

                                                        </li>

                                                    )

                                                })
                                            }

                                        </ul>

                                    </div>

                                </div>





                                {/* FEATURED PRODUCTS */}



                                <div className="col-lg-12">

                                    <h4 className="mb-4">
                                        Featured products
                                    </h4>

                                    {
                                        pr.map((i) => {

                                            return (

                                                <div
                                                    className="d-flex align-items-center justify-content-start mb-4"
                                                    key={i.id}
                                                >

                                                    {/* IMAGE */}

                                                    <div
                                                        className="rounded"
                                                        style={{
                                                            width: "100px",
                                                            height: "100px",
                                                            overflow: "hidden"
                                                        }}
                                                    >

                                                        <img
                                                            src={i.image}
                                                            alt=""
                                                            className="img-fluid rounded"
                                                            style={{
                                                                width: "100%",
                                                                height: "100%",
                                                                objectFit: "cover"
                                                            }}
                                                        />

                                                    </div>



                                                    {/* DETAILS */}

                                                    <div className="ms-3">

                                                        {/* PRODUCT NAME */}

                                                        <h6 className="mb-2">
                                                            {i.pname}
                                                        </h6>



                                                        {/* STARS */}

                                                        <div className="d-flex mb-2">

                                                            <i className="fa fa-star text-secondary" />
                                                            <i className="fa fa-star text-secondary" />
                                                            <i className="fa fa-star text-secondary" />
                                                            <i className="fa fa-star text-secondary" />
                                                            <i className="fa fa-star" />

                                                        </div>



                                                        {/* PRICE */}

                                                        <div className="d-flex mb-2">

                                                            <h5 className="fw-bold me-2">
                                                                ${i.price}
                                                            </h5>

                                                        </div>

                                                    </div>

                                                </div>

                                            )

                                        })
                                    }

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default ShopDetail