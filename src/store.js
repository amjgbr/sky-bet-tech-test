import { createStore, applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import wsMiddleware from './middleware/middleware';

const middleware = [thunk, wsMiddleware];
export default function configureStore(initialState={}) {
 return createStore(
   rootReducer,
   initialState,
   compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
 );
}