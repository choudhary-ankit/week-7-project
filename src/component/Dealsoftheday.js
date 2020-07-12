import React, { Component } from 'react'
import style from './Dealsoftheday.module.css'

export default class Dealsoftheday extends Component {
    render() {
        return (
            <div className={style.box_arrenge}>
                <div className={style.box_one}>
                    <div className={style.deals_day}>
                        <h3>Deals of The Day</h3>
                        <button className={style.button}>Viws all</button>
                    </div>
                    <hr></hr>
                    <div className={style.box_arrenge}>
                        <div className={style.common_flex}>
                            <img src={"/collection/headphones & speaker.jpeg"} className={style.common_img}></img>
                            <h4>Headphones & Speaker</h4>
                            <span className={style.common_text}>upto 50% off</span>
                            <span className={style.common_text}>JBL, Sony & More</span>
                        </div>
                        <div className={style.common_flex}>
                            <img src={"/collection/smart watch.jpeg"} className={style.common_img}></img>
                            <h4>Headphones & Speaker</h4>
                            <span className={style.common_text}>upto 50% off</span>
                            <span className={style.common_text}>JBL, Sony & More</span>
                        </div>
                        <div className={style.common_flex}>
                            <img src={"/collection/Trimmer.jpeg"} className={style.common_img}></img>
                            <h4>Headphones & Speaker</h4>
                            <span className={style.common_text}>upto 50% off</span>
                            <span className={style.common_text}>JBL, Sony & More</span>
                        </div>
                        <div className={style.common_flex}>
                            <img src={"/collection/powerbank.jpeg"} className={style.common_img}></img>
                            <h4>Headphones & Speaker</h4>
                            <span className={style.common_text}>upto 50% off</span>
                            <span className={style.common_text}>JBL, Sony & More</span>
                        </div>
                        <div className={style.common_flex}>
                            <img src={"/collection/Seasonal Applinces.jpeg"} className={style.common_img}></img>
                            <h4>Headphones & Speaker</h4>
                            <span className={style.common_text}>upto 50% off</span>
                            <span className={style.common_text}>JBL, Sony & More</span>
                        </div>
                    </div>
                </div>
                <div className={style.box_two}>
                    <img src={"/collection/addBaner.jpg"} className={style.img}></img>
                </div>
            </div>
        )
    }
}
