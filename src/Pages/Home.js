import React from 'react'
import Chart from '../components/Chart/Chart'
import Statistics from '../components/Statistics/Statistics'
import './Home.css'

function Home() {
    return (
        <div className="Home">
            <Statistics />
            <Chart />
        </div>
    )
}

export default Home