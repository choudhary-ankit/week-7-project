import React, { Component } from 'react'
import style from './Sectionthird_img.module.css'

export default class Sectionthird_img extends Component {
    render() {
        return (
            <div>
                <img src={"/collection/poster.jpeg"} className={style.img}></img>
            </div>
        )
    }
}
