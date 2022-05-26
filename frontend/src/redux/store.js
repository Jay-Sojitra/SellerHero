import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { alertsReducer } from './reducers/alertsReducer'
import { plansReducer } from './reducers/plansReducer';
import { faqsReducer } from './reducers/faqsReducer'

const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
    alertsReducer,
    plansReducer,
    faqsReducer
})


const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)

    )
);

export default store;
