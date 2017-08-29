import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import user from '../common/reducers/user';
import goldmeeting from '../common/reducers/goldmeeting';


const rootReducer = combineReducers({
    routing,
    user,
    goldmeeting,
    form: formReducer
});

export default rootReducer;

export const initialStates = {

};
