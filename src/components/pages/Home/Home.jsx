import React, { useState } from 'react';
import './Home.css';

import Header from '../../Header/Header.jsx';
import ExploreMenu from '../../ExploreMenu/ExploreMenu.jsx';
import FoodItem from '../../FoodItem/FoodItem.jsx';
import AppDownload from '../../AppDownload/AppDownload.jsx';

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodItem />
      <AppDownload />
    </div>
  );
};

export default Home;
