import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Details from './Details';
import Results from './Results';

const Router = () => {

    return (
        <main>
            <Switch>
                <Route exact path="/items/:itemId" component={Details}/>
                <Route component={Results}/>
            </Switch>
        </main>
    );
};
export default Router;
