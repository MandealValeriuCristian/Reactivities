import React, { Fragment } from 'react';
import {Container} from 'semantic-ui-react';
import NavBar from './navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router-dom';
import ActivityForm from '../../features/activities/form/ActivityForm';
import HomePage from '../../features/activities/home/HomePage';
function App() {

  return (
    <Fragment> /* short version of fragment <> ... </> */
        <NavBar/>
       <Container style={{marginTop: '7em'}}>
         <Route exact path='/' component={HomePage}/>
         <Route path='/activities' component={ActivityDashboard}/>
         <Route path='/createActivity' component={ActivityForm}/>
       </Container>
    </Fragment>
  );
}

export default observer(App);
