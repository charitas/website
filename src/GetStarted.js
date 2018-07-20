import React from 'react';

export default function GetStarted() {
  return (
    <div className="section2">
      <div style={{ padding: '80px' }}>
        <h2>
          GET STARTED
        </h2>
        <div className="animatedLine" />
        <h3 style={{ marginTop: '40px' }}>
          Programmers
        </h3>
        <p>
          To get started coding, visit our Github profile
          <a href="https://github.com/charitas/charitas">
            here
          </a>
          . This project uses React, Node and currently we are
           using Firebase for the backend. But we will be soon
            moving away from this to a micro-server to avoid disruptions of anykind.
        </p>
        <h3 style={{ marginTop: '40px' }}>
          Can&#x0027t Program?
        </h3>
        <p>
          No problem! You can contribute by updating
           documentation, looking for bugs, and making how-to
            videos. If this isn&#x0027t your cup of tea, and you know
             of other ways you can contribute let us know! Send
              an email to Jessica at jbradford@kyvis.com and she will help you get started.
        </p>
      </div>
      <svg className="circles circle2" height="100" width="100">
        <circle cy="50" cx="50" r="50" fill="#00CED1" />
      </svg>
      <svg className="circles circle1" height="140" width="140">
        <circle cy="70" cx="70" r="70" fill="#500a90" />
      </svg>
      <svg className="circles circle3" height="60" width="60">
        <circle cy="30" cx="30" r="30" fill="grey" />
      </svg>
      <svg className="circles circle4" height="80" width="80">
        <circle cy="40" cx="40" r="40" fill="#000d1a" />
      </svg>
    </div>
  );
}
