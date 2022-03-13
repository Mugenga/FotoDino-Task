import React, { Component } from 'react';
// import './Main.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import './App.css';

import Home from './pages/Home';
import Event from './pages/Location';
//import 'font-awesome/css/font-awesome.min.css';



class App extends Component {


  render() {


    console.log('rendered')
    ///

    return (

      <Router>
        <Switch>

          <Route exact path="/" component={Home} />
           <Route exact path="/events/:id" component={Event} />
          {/*<Route exact path="/signIn" component={SignInForm} />
          <Route exact path="/SignUp" component={SignUp} />
          {isAuthenticated && <Route exact path="/Activities" component={Activities} />}
          {isAuthenticated && <Route exact path="/NewTransactionA" component={NewTransactionA} />}
          {isAuthenticated && <Route exact path="/NewTransactionB" component={NewTransactionB} />}
          {isAuthenticated && <Route exact path="/NewTransactionC" component={NewTransactionC} />}
          {isAuthenticated && <Route exact path="/NewTransactionD" component={NewTransactionD} />}
          {isAuthenticated && <Route exact path="/NewTransactionE" component={NewTransactionE} />}
          {isAuthenticated && <Route exact path="/NewTransactionF" component={NewTransactionF} />}
          {isAuthenticated && <Route exact path="/Recipients" component={Recipients} />}
          {isAuthenticated && <Route exact path="/AddRecipient" component={AddRecipient} />}
          {isAuthenticated && <Route exact path="/Cards" component={Cards} />}
          {isAuthenticated && <Route exact path="/AddCard" component={AddCard} />}
          {isAuthenticated && <Route exact path="/EditProfile" component={EditProfile} />}
          {isAuthenticated && <Route exact path="/AddProfile" component={AddProfile} />}
          {isAuthenticated && <Route exact path='/PayConnect' component={PayConnect} />}
          {isAuthenticated && <Route exact path='/Institution' component={Institution} />}
          {isAuthenticated && <Route exact path='/PayInstitution' component={PayInstitution} />}
          {isAuthenticated && <Route exact path='/InstitutionKigaliIndependentUniversity' component={InstitutionKigaliIndependentUniversity} />}
          {isAuthenticated && <Route exact path='/AccountHolderDetails' component={AccountHolderDetails} />} */}
          
        </Switch>
      </Router>
    );
  }
}

export default App;







