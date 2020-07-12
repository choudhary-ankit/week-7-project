import React, { Component } from 'react'
import style from './Headlinesecond.module.css'

export default class Headlinesecond extends Component {
    render() {
        return (
            <div className={style.head}>
                <div className={style.head_arrenge}>
                    <select className={style.select}>
                        <option>Electronics</option>
                        <option>Electronics</option>
                        <option>Electronics</option>
                        <option>Electronics</option>
                    </select>
                    <select className={style.select}>
                        <option>TV & Applinces</option>
                        <option>Electronics</option>
                        <option>Electronics</option>
                        <option>Electronics</option>
                    </select>
                    <select className={style.select}>
                        <option>Men</option>
                        <option>Electronics</option>
                        <option>Electronics</option>
                        <option>Electronics</option>
                    </select>
                    <select className={style.select}>
                        <option>Women</option>
                        <option>Electronics</option>
                        <option>Electronics</option>
                        <option>Electronics</option>
                    </select>
                    <select className={style.select}>
                        <option>Baby & Kids</option>
                        <option>Electronics</option>
                        <option>Electronics</option>
                        <option>Electronics</option>
                    </select>
                    <select className={style.select}>
                        <option>Home & Furniture</option>
                        <option>Electronics</option>
                        <option>Electronics</option>
                        <option>Electronics</option>
                    </select>
                    <select className={style.select}>
                        <option>Sports</option>
                        <option>Electronics</option>
                        <option>Electronics</option>
                        <option>Electronics</option>
                    </select>
                </div>
            </div>
        )
    }
}
