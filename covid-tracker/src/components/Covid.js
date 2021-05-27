import React, { useEffect, useState } from 'react'
import './Covid.css'

export const Covid = () => {

    const [data, setdata] = useState([]);
    const getcoviddata = async () => {
        try {
            const res = await fetch('	https://api.covid19india.org/data.json');
            // console.log(res);
            const actualdata = await res.json();
            console.log(actualdata.statewise[0]);
            setdata(actualdata.statewise[0]);
        } catch (err) {
            return err;
        }
    }
    useEffect(() => {
        getcoviddata();
    }, []);
    return (
        <>
            <section>
                <h1><span class="dot"></span>  LIVE</h1>
                <h2 data-text="COVID_19_TRACKER">COVID_19_TRACKER</h2>
                <div class="component-pricing-list">
                    <ul class="pricing-list">
                        <li class="actv"><a href="#">
                            <span class="title">OUR COUNTRY</span>
                            <span class="price"> INDIA</span>
                        </a></li>
                        <li class="actv"><a href="#">
                            <span class="title">Total  Confirmed</span>
                            <span class="price"> {data.confirmed}</span>
                        </a></li>
                        <li class="actv"><a href="#">
                            <span class="title">Total Recoverd</span>
                            <span class="price">{data.recovered}</span>
                        </a></li>
                    </ul>
                    <br></br>
                    <ul class="pricing-list">
                        <li class="actv"><a href="#">
                            <span class="title">Total Death</span>
                            <span class="price">{data.deaths}</span>
                        </a></li>
                        <li class="actv"><a href="#">
                            <span class="title">Total  Active</span>
                            <span class="price"> {data.active}</span>
                        </a></li>
                        <li class="actv"><a href="#">
                            <span class="title">Last Updated</span>
                            <span class="price">{data.lastupdatedtime}</span>
                        </a></li>
                    </ul>
                </div>
                {/* <ul>
                    <li className="component-pricing-list">
                        <div className="pricing-list">
                            <div className="card_inner">
                                <p className="card__name">Our <span>Country</span></p>
                                <p className="card__total card__small">INDIA</p>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__main">
                            <div className="card_inner">
                                <p className="card__name">Total <span>Confirmed</span></p>
                                <p className="card__total card__small">{data.confirmed}</p>
                            </div>
                        </div>
                    </li>

                    <li className="card">
                        <div className="card__main">
                            <div className="card_inner">
                                <p className="card__name">Total <span>Recovered</span></p>
                                <p className="card__total card__small">{data.recovered}</p>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__main">
                            <div className="card_inner">
                                <p className="card__name">Total <span>Death</span></p>
                                <p className="card__total card__small">{data.deaths}</p>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__main">
                            <div className="card_inner">
                                <p className="card__name">Total <span>Active</span></p>
                                <p className="card__total card__small">{data.active}</p>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__main">
                            <div className="card_inner">
                                <p className="card__name">Last <span>Updated</span></p>
                                <p className="card__total card__small">{data.lastupdatedtime}</p>
                            </div>
                        </div>
                    </li>

                </ul> */}
            </section>
        </>
    )
}

export default Covid