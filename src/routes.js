import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SignUp from './components/common/_singup';
import SignIn from './components/common/_singin';
import Dashboard from './screens/dashboard/index';
import NewTravel from './components/common/_travelRegister';
import Travels from './components/common/_travelList'
import TravelItemChanges from './components/common/_travelData'
import EditTravel from './components/common/_travelEdit'
import Drivers from './components/common/_driverList';
import DriverDetails from './components/common/_driverData'
import EditDriver from './components/common/_driverEdit'
import NewDriver from './components/common/_driverRegister';
import Vehicles from './components/common/_vehicleList';
import VehicleDetails from './components/common/_vehicleData'
import EditVehicle from './components/common/_vehicleEdit'
import NewVehice from './components/common/_vehicleRegister';
import Settings from './components/common/_settings';

import { isAuthenticated } from './services/auth';


const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Layout>
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const SemLayout = props => <div>{props.children}</div>;

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <AppRoute exact path='/' layout={SemLayout} component={SignIn} />
      <AppRoute exact path='/signup' layout={SemLayout} component={SignUp} />

      <PrivateRoute
        exact
        path='/Dashboard'
        layout={SemLayout}
        component={Dashboard}
      />
      <PrivateRoute
        exact
        path='/new_travel'
        layout={Dashboard}
        component={NewTravel}
      />
      <PrivateRoute
        exact
        path='/travels'
        layout={Dashboard}
        component={Travels}
      />
      <PrivateRoute
        exact
        path='/travel/:id'
        layout={Dashboard}
        component={TravelItemChanges}
      />
      <PrivateRoute
        exact
        path='/travel/edit/:id'
        layout={Dashboard}
        component={EditTravel}
      />
      <PrivateRoute
        exact
        path='/drivers/'
        layout={Dashboard}
        component={Drivers}
      />
      <PrivateRoute
        exact
        path='/driver/:id'
        layout={Dashboard}
        component={DriverDetails}
      />
      <PrivateRoute
        exact
        path='/driver/edit/:id'
        layout={Dashboard}
        component={EditDriver}
      />
      <PrivateRoute
        exact
        path='/new_driver'
        layout={Dashboard}
        component={NewDriver}
      />
      <PrivateRoute
        exact
        path='/vehicles/'
        layout={Dashboard}
        component={Vehicles}
      />
      <PrivateRoute
        exact
        path='/vehicle/:id'
        layout={Dashboard}
        component={VehicleDetails}
      />
      <PrivateRoute
        exact
        path='/vehicle/edit/:id'
        layout={Dashboard}
        component={EditVehicle}
      />
      <PrivateRoute
        exact
        path='/new_vehicle'
        layout={Dashboard}
        component={NewVehice}
      />
      <PrivateRoute
        exact
        path='/settings'
        layout={Dashboard}
        component={Settings}
      />
      <AppRoute exact path='*' component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
