import React from 'react';
import { Switch,Route } from 'react-router';
import './App.css';
import HomePage from '../src/pages/homepage/homepage.component';
import ShopPage from '../src/pages/shop/shop.component.jsx';
import Header from './components/header/header.component';
import SignInAndSignUp from '../src/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';


class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser:null
    }
  }

   unsubscribeFromAuth =null;

  componentDidMount() {
    this.unsubscribeFromAuth =auth.onAuthStateChanged(user =>{
      this.setState({currentUser:user});

      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route  path="/shop" component={ShopPage}></Route>
          <Route path="/signin" component={SignInAndSignUp}></Route>
         </Switch>
      </div>
    );
  }
}
  

export default App;
