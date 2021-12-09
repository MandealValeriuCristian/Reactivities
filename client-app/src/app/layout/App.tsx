import React, { Fragment } from 'react';
import {Container} from 'semantic-ui-react';
import NavBar from './navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route, useLocation } from 'react-router-dom';
import ActivityForm from '../../features/activities/form/ActivityForm';
import HomePage from '../../features/activities/home/HomePage';
import ActivityDetails from '../../features/activities/details/ActivityDetails';
function App() {
  const location = useLocation();
  return (
    <Fragment> 
      {/* /* short version of fragment <> ... </> */ }
      <Route exact path='/' component={HomePage}/>
      <Route
      path={'/(.+)'}
      render={() => (
        <>
        <NavBar/>
       <Container style={{marginTop: '7em'}}>
         
         <Route exact path='/activities' component={ActivityDashboard}/>
         <Route path='/activities/:id' component={ActivityDetails}/>
         <Route key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm}/>
       </Container>
        </>
      )}
      />
        
    </Fragment>
  );
}

export default observer(App);
