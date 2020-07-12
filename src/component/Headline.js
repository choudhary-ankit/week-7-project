import React, { Component } from 'react'
import style from './Headline.module.css'

export default class Headline extends Component {
    render() {
        return (
            <div>
                <div className={style.full_screen}>
                    <div className={style.head_main}>
                        <li>
                            <div className={style.head_img_explore}>
                                <img src={"/collection/flipkart-plus_4ee2f9.png"} className={style.head_img}></img>
                                <p className={style.head_text}>Explore <span style={{color:"yellow"}}>Pluse+</span></p>
                            </div>
                        </li>
                        <li className={style.input_width}>
                            <input type="texrt" className={style.input} placeholder={"Search for product, brand and More"}></input>
                        </li>
                        <li className={style.button_alling}>
                            <button className={style.button}>Login</button>
                        </li>
                        <li className={style.option_alling}>
                            <select  className={style.option}>
                                <option>More</option>
                                <option>Buy</option>
                                <option>Sell</option>
                                <option>Add</option>
                            </select>
                        </li>
                        <li>
                            <div className={style.cart_arrenge}>
                                <img src={"/collection/download.png"} className={style.cart_img}></img>
                                <p className={style.cart_text}>Cart</p>
                            </div>
                        </li>
                    </div>
                </div>
            </div>
        )
    }
}
