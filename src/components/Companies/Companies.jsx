import React from 'react';
// import img1 from '../../assets/prologis.png';
// import img2 from '../../assets/tower.png';
// import img3 from '../../assets/equinix.png';
// import img4 from '../../assets/realty.png';
import './Companies.css';
const Companies = () => {
  return (
    <div>
      <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
      <img src="./prologis.png" alt="" />
      <img src="./tower.png" alt="" />
      <img src="./equinix.png" alt="" />
      <img src="./realty.png" alt="" />
      </div>
      </section>
    </div>
  );
};

export default Companies;