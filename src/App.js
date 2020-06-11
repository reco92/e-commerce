import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import Homepage from './pages/homepage/homepagre.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-up/sign-in-up.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component{

  constructor(props){
    super();
    // this.state = {
    //   currentUser: null

    // }
  }

  unsuscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapShot => {
          // this.setState({
            // currentUser: {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })

        })
      } else {
        setCurrentUser(userAuth)

      }
      // if(userAuth){
      //   this.setState({ currentUser: userAuth })
      //   console.log('LOGGED!!!')
      // }
      // console.log(userAuth);
    })
  }

  componentWillUnmount(){
    this.unsuscribeFromAuth();
  }



  render(){
    return (
      <div>
        {/* <Header currentUser={this.state.currentUser} /> */}
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={ () =>
            this.props.currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignInAndSignUpPage />
            )
          } 
          />
        </Switch>
      </div>
      )
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchtoProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchtoProps)(App);
