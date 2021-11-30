import React from 'react';
import './Statistics.css'

function Statistics() {
    return (
        <div className="Statistics"> 
            <div className="StatisticsItem">
                <span className="StatisticsTitle">Fitness</span>
                <div>
                <span className="StatisticsValue">0.90900990</span>
                </div>
            </div>

            <div className="StatisticsItem">
                <span className="StatisticsTitle">Precision</span>
                <div>
                <span className="StatisticsValue">0.909090</span>
                </div>
            </div>

            <div className="StatisticsItem">
                <span className="StatisticsTitle">Generalization</span>
                <div>
                <span className="StatisticsValue">0.909090</span>
                </div>
            </div>
        </div>

    )
}

export default Statistics