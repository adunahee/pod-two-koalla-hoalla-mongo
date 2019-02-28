import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { takeEvery, put } from 'redux-saga/effects';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';

function* rootSaga() {
    yield takeEvery('GET_KOALAS', getKoalas);
    yield takeEvery('MARK_TRANSFER', markTransfer);
    yield takeEvery('ADD_KOALA', addKoala);
    yield takeEvery('KILL', killKoala);
}
//Sagas
function* getKoalas(action) {
    try {
        const response = yield axios.get('/api/koala');
        yield put({type: 'SET_KOALAS', payload: response.data});
    } catch (error) {
        console.log('Error gettings tags.');
        alert('there was a problem getting getKoalas.')
    }
}

function* markTransfer(action) {
    try {
        console.log('In markTransfer saga line 32');
        yield axios.put(`/api/koala/`, action.payload )
        yield put({type: 'GET_KOALAS'});
    } catch (error) {
        console.log('Error gettings tags.');
        alert('there was a problem getting markTransfer.')
    }
}

function* addKoala(action) {
    try {
        console.log('In addKoala saga line 43');

        yield put();
    } catch (error) {
        console.log('Error gettings tags.');
        alert('there was a problem getting addKoala.')
    }
}

function* killKoala(action) {
    try {
        console.log('In killKoala saga line 254');

        yield put();
    } catch (error) {
        console.log('Error gettings tags.');
        alert('there was a problem getting killKoala.')
    }
}

//Reducers
const setKoalas = (state = [], action) => {
    switch (action.type) {
        case 'SET_KOALAS':
            return action.payload;
        default:
            return state;
    }
}

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({
        setKoalas,
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('react-root'));