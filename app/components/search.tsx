"use client";

import { useEffect, useState } from "react";
import {RotatingLines} from 'react-loader-spinner'

type Airports = {
    airport: string;
    code: string;
    city: string;
    grup: string;
}


export const Search = () => {
    const [area, setArea] = useState([]);
    const [filter, setFilter] = useState([]);

    useEffect(() =>{
        const getArea = async () => {
            const res = await fetch('http://143.198.208.181:3000/api/getcodearea-json');
            const json = await res.json()

            setArea(json);
        }
        
        getArea()
        setFilter(area)
    }, [])

    const filterAirport = (search: string) => {
        if (search === '') setFilter(area)
        else {
            const result = area.filter((el: Airports) => el.city.toLowerCase().includes(search.toLowerCase()) || el.airport.toLowerCase().includes(search.toLowerCase()) || el.code.toLowerCase().includes(search.toLowerCase()))

            setFilter(result);
        }
    }

return (
    <div className="level search-flight">
        <div className="column is-one-fifth form-item">
            <label>From</label>
            <input name="from" onChange={el => filterAirport(el.target.value)} className="search" autoComplete="off">
            </input>
            <div className="search-items">
                {filter.length > 0 ? (
                    filter.map((el: Airports, i: number) => (
                        <div key={i} className="search-items-list">
                            <strong>{el.code}</strong>
                            <p>{el.airport} - {el.city}</p>
                        </div>
                    ))
                )
            :
                <div className="search-items-list level-item">
                     <RotatingLines
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="30"
                        visible={true}
                    /> {" "}Searching ...
                </div>
            }
            </div>
        </div>
        <div className="column is-one-fifth form-item">
            <label>To</label>
            <input name="to" onChange={el => filterAirport(el.target.value)} className="search" autoComplete="off">
            </input>
            <div className="search-items">
                {filter.length > 0 ? (
                    filter.map((el: Airports, i: number) => (
                        <div key={i} className="search-items-list">
                            <strong>{el.code}</strong>
                            <p>{el.airport} - {el.city}</p>
                        </div>
                    ))
                )
            :
            <div className="search-items-list level-item">
                    <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="30"
                    visible={true}
                /> {" "}Searching ...
            </div>
            }
            </div>
        </div>
        <div className="column is-one-fifth form-item">
            <label>No. of Passengers</label>
            <input name="from" onChange={el => console.log(el)} className="search" autoComplete="off">
            </input>
            <div className="search-items">
                <div className="search-items-list">
                    <strong>People</strong>
                </div>
            </div>
        </div>
        <div className="column is-one-fifth form-item">
            <label>Departure Date</label>
            <input name="from" onChange={el => console.log(el)} className="search" autoComplete="off">
            </input>
            <div className="search-items">
                <div className="search-items-list">
                    <strong>Schedule</strong>
                </div>
            </div>
        </div>
        <div className="column is-one-fifth form-item">
            Search
        </div>
    </div>
)
}