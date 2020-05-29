import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepagre.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-up/sign-in-up.component.jsx';
import { auth } from './firebase/firebase.utils';

class App extends React.Component{

  constructor(props){
    super();
    this.state = {
      currentUser: null

    }
  }

  unsuscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(user =>{
      if(user){
        this.setState({ currentUser: user })
        console.log('LOGGED!!!') 
      }
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsuscribeFromAuth();
  }



  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
      )
  }
}

export default App;
