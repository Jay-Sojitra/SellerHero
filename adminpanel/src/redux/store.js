import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { alertsReducer } from './reducers/alertsReducer'
import { usersReducer } from './reducers/usersReducer';
import { subscribersReducer } from './reducers/subscribersReducer'
import { plansReducer,ActivePlansReducer } from './reducers/plansReducer'


const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
    alertsReducer,
    usersReducer,
    subscribersReducer, 
    plansReducer,
    ActivePlansReducer

})


const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)

    )
);

export default store;
