import React, { Component } from 'react'
import style from './Fourthsection.module.css'

export default class Fourthsection extends Component {
    render() {
        return (
            <div className={style.img}>
                <img src={"/collection/mobile.jpeg"} className={style.img_size}></img>
                <img src={"/collection/download.jpeg"} className={style.img_size}></img>
                <img src={"/collection/realme.jpeg"} className={style.img_size}></img>
            </div>
        )
    }
}
