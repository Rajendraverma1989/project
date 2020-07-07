import React from 'react';
import './App.css';
import { Switch, Route, Redirect} from 'react-router-dom';
import { connect} from 'react-redux';

import Homepage from './pages/homepage';
import Header from './components/header';
import SignInUp from './pages/sign-In-Up';
import { auth, createUserProfileDocument } from './firebase/firebase-utils';
import { setCurrentUser } from './redux/user/user-action';

class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
   this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth =>{
     if(userAuth){
        const userRef= await createUserProfileDocument(userAuth);
         userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          })
        })
      }

      setCurrentUser(userAuth);
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    const { currentUser } = this.props;
    return (
      <div>
       { currentUser? 
        <Header />
        : null }
        <Switch>
        <Route exact path='/' render={() => currentUser? (<Homepage />): <SignInUp />}  />
        <Route exact psth='/signin' render={() => currentUser? (<Redirect to= '/' />): <SignInUp />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
      setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
