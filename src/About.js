import React from 'react';

export default function About() {
  return (
    <div className="section3">
      <svg className="verticalLines" height="93vh" width="100vw">
        <g fill="none">
          <path stroke="#500a90" strokeWidth="0.5" d="M0 20, 1100 20, 1100 1100" />
          <path stroke="#00CED1" strokeWidth="0.5" d="M0 40, 1080 45, 1080 1080" />
          <path stroke="grey" strokeWidth="0.5" d="M0 60, 1060 60, 1060 1060" />
          <path stroke="#00CED1" strokeWidth="0.5" d="M0 80, 1040 80, 1040 1040" />
          <path stroke="#500a90" strokeWidth="0.5" d="M0 100, 1020 100, 1020 1020" />
          <path stroke="grey" strokeWidth="0.5" d="M0 120, 1000 120, 1000 1000" />
        </g>
      </svg>
      <svg className="verticalLines" height="93vh" width="100vw">
        <g fill="none">
          <path stroke="#500a90" strokeWidth="0.5" d="M505 300, 505 800, 0 800" />
          <path stroke="#00CED1" strokeWidth="0.5" d="M485 300, 485 785, 0 785" />
          <path stroke="grey" strokeWidth="0.5" d="M465 300, 465 765, 0 765" />
          <path stroke="#500a90" strokeWidth="0.5" d="M445 300, 445 745, 0 745" />
          <path stroke="#00CED1" strokeWidth="0.5" d="M425 300, 425 725, 0 725" />
          <path stroke="grey" strokeWidth="0.5" d="M405 300, 405 705, 0 705" />
        </g>
      </svg>
      <div style={{ zIndex: '50', width: '670px' }}>
        <iframe width="670" height="370" src="https://www.youtube.com/embed/Sr3X0DCXI-M" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="Introductory Video" />
        <h2 style={{ textAlign: 'center' }}>
          ABOUT
        </h2>
        <div className="animatedLine" style={{ backgroundColor: 'white', marginLeft: '255px' }} />
        <p>
Charitas was first started by Kyle Bradford. Kyle wanted to make
 software that could impact the world for the greater good. Kyle
  first started this project because he wanted to be able to
   keep track of a library of documents, videos and audio, and
    he wanted to be able to make it open with anyone. Kyle wants
     individuals to be able to translate documents, videos and
      audio into any language. He wants open communication so
       that users can understand the person they are learning
        from, and so that individuals can learn from their users
        as well.
        </p>
        <p>
As Kyle started this project, there was too much that he wanted
 to add to it. And so, he realized that the projects end goal
  was to be open to it&#x0027s users, so he decided he would make it
   open to everyone. Kyle wants anyone to be able to contribute
    if they wish.
        </p>
      </div>
    </div>

  );
}
