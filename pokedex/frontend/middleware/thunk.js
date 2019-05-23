const thunk = ({ dispatch, getState }) => {
    // debugger;
    return next => {
        // debugger;
        return action => {
            // debugger;
            if (typeof action === 'function') {
                // debugger;
                return action(dispatch, getState);
            } else {
                // debugger;
                // next could be another piece of middleware or the rootReducer
                return next(action);
            }
        };
    };
};

export default thunk;