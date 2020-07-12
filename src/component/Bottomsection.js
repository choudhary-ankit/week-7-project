import React, { Component } from 'react'
import style from './Bottomsection.module.css'

export default class Bottomsection extends Component {
    render() {
        return (
            <div className={style.box}>
                <div className={style.flex}>
                    <div className={style.flex_col}>
                        <p style={{color:"grey"}}>About</p>
                        <p>Contact us</p>
                        <p>About Us</p>
                        <p>Carieer</p>
                        <p>Flipkart Story</p>
                        <p>press</p>
                    </div>
                    <div className={style.flex_col}>
                        <p style={{color:"grey"}}>Help</p>
                        <p>Payment</p>
                        <p>shiping</p>
                        <p>cantillation & Return</p>
                        <p>FAQ</p>
                        <p>Report Infrigment</p>
                    </div>
                    <div className={style.flex_col}>
                        <p style={{color:"grey"}}>Policy</p>
                        <p>Return policy</p>
                        <p>Terms of use</p>
                        <p>security</p>
                        <p>privacy</p>
                        <p>sitemap</p>
                        <p>ERP compilation</p>
                    </div>
                    <div className={style.flex_col}>
                        <p style={{color:"grey"}}>Social</p>
                        <p>facebook</p>
                        <p>Twitter</p>
                        <p>youtube</p>
                    </div>
                    <p className={style.line}></p>
                    <div className={style.flex_col}>
                        <p style={{color:"grey"}}>Mail us</p>
                        <p>Flipkart Internet Private Limited,<br></br>
                            Buildings Alyssa, Begonia & <br></br>
                            Clove Embassy Tech Village, <br></br>
                            Outer Ring Road, Devarabeesanahalli Village, <br></br>
                            Bengaluru, 560103, <br></br>
                            Karnataka, India. <br></br>
                        </p>
                    </div>
                    <div className={style.flex_col}>
                        <p style={{color:"grey"}}>Register office Address</p>
                        <p>
                            Flipkart Internet Private Limited, <br></br>
                            Buildings Alyssa, Begonia & <br></br>
                            Clove Embassy Tech Village, <br></br>
                            Outer Ring Road, Devarabeesanahalli Village, <br></br>
                            Bengaluru, 560103, <br></br>
                            Karnataka, India <br></br>
                            CIN : U51109KA2012PTC066107 <br></br>
                            Telephone: 1800 208 9898 <br></br>
                        </p>  
                    </div>
                </div>
                <div className={style.flex_last}>
                    <p className={style.hr_line}></p>
                </div>
            </div>
        )
    }
}
