import React, { useState, useEffect } from 'react';
import './Stats.css'; // Import your CSS file for styling

function Stats() {
  const [statistics, setStatistics] = useState({
    projects: 50,
    clients: 43,
    coffee: 32,
    photos: 45,
  });

 

  return (
    <div>
      <div style={{
                        padding:"50px"
                    }}></div>
      <h1 className="text-center font-bold" >Our Statistics</h1>
      
      <div id="projectFacts" className="sectionClass">
        <div className="fullWidth eight columns">
          <div className="projectFactsWrap">
            <div className="item">
              <i className="fa fa-briefcase"></i>
              <p className="number">{statistics.projects}</p>
              <span></span>
              <p>Projects done</p>
            </div>
            <div className="item">
              <i className="fa fa-smile-o"></i>
              <p className="number">{statistics.clients}</p>
              <span></span>
              <p>Happy clients</p>
            </div>
            <div className="item">
              <i className="fa fa-coffee"></i>
              <p className="number">{statistics.coffee}</p>
              <span></span>
              <p>Cups of coffee</p>
            </div>
            <div className="item">
              <i className="fa fa-camera"></i>
              <p className="number">{statistics.photos}</p>
              <span></span>
              <p>Photos taken</p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Stats;
