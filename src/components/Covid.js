import React, { useEffect, useState } from 'react'
import './Covid.css'

export const Covid = () => {

    const [data, setdata] = useState([]);
    const [data2, setdata2] = useState([]);
    const getcoviddata = async () => {
        try {
            const res = await fetch('	https://api.covid19india.org/data.json');
            // console.log(res);
            const actualdata = await res.json();
            console.log(actualdata.statewise[0]);
            setdata(actualdata.statewise[0]);
            setdata2(actualdata.statewise);
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
            </section>
            <section className="scheme">
                <div className="container-fluid mt-5">
                    <div className="main-heading">
                    </div>
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead className="thead-dark sticky">
                                <tr>
                                    <th>State</th>
                                    <th>Confirmed</th>
                                    <th>Recovered</th>
                                    <th>Deaths</th>
                                    <th>Last Updated</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data2.map((curelem, ind) => {
                                        return (
                                            <tr>
                                                <th>{curelem.state}</th>
                                                <th>{curelem.confirmed}</th>
                                                <th>{curelem.recovered}</th>
                                                <th>{curelem.deaths}</th>
                                                <th>{curelem.lastupdatedtime}</th>

                                            </tr>
                                        )
                                    })

                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Covid