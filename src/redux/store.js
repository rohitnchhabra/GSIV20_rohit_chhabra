import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import saga from './saga';
import { createLogger } from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(
    sagaMiddleware,
    createLogger({ collapsed: true })
));

export default store;

sagaMiddleware.run(saga);