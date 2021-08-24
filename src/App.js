import React from 'react';
import { Switch,Route } from 'react-router';
import './App.css';
import HomePage from '../src/pages/homepage/homepage.component';
import ShopPage from '../src/pages/shop/shop.component.jsx';


function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route  path="/shop" component={ShopPage}></Route>
       </Switch>
    </div>
  );
}

export default App;
