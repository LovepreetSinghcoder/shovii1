import { getDocs, doc, collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { db } from '../Firebase/FirebaseConfig';
import './Content.css'

const Content = () => {
    const [foodItems, setFoodItems] = useState([])

    const getfoodItems = async () => {
        setFoodItems([]);
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            setFoodItems((prev) => [...prev, doc.data()])
        })
    }
    useEffect(() => {
        getfoodItems();
    }, [])

    // console.log(foodItems)
    return (
        <div className=' contentcontainer'>
            <div className="contentcontheading">
                <span>Today's Special</span>
            </div>
            <div
                // className="grid text-center row contentcontainerinner"
                className="container1"
            >
                {foodItems.slice(3, 6).map((data) => {
                    return (
                        // <div className="card " style={{ width: '18rem' }} >
                        //     <img src={data.foodImageUrl} className="card-img-top" alt="..." />
                        //     <div className="card-body">
                        //         <h5 className="card-title">{data.foodName}</h5>
                        //         <p className="card-text">{data.restaurantName}</p>
                        //         <Link to='/'><span className="btn btn-primary">₹ {data.foodPrice} Buy Now</span></Link>
                        //     </div>
                        // </div>

                        // NEW CODE 
                        <div >
                            <div className="container1inner">
                                <div className="cCard">
                                    <div className="containerImg">
                                        <img src={data.foodImageUrl} alt="" />
                                    </div>
                                    <div className="container1textarea">
                                        <div className="containerFoodName">
                                            <p>{data.foodName}</p>
                                        </div>
                                        <div className="containerFoodRestro">
                                            <p>{data.restaurantName}</p>
                                        </div>
                                        <div className="containerbuyingFood">
                                        <Link to='/'> <span className="btn">₹ {data.foodPrice} Buy Now</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    )
                })}
            </div>
            {/* NEW STYLE CONATINER  */}



        </div>
    )
}

export default Content