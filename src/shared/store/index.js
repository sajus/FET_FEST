import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
// import login from '../../shared/modules/Login/state/reducers';
import login from '../modules/stylintrucks.com/Login/state/reducers';
import reduxTest from '../modules/stylintrucks.com/ReduxTest/state/reducers';



const rootReducer = combineReducers({
    login,
    reduxTest
});

const createStoreWithMiddleware  = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;
