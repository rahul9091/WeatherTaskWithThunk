const initialState = {
    indicatorStatus: false,
};


export default function BasicReducer(state=initialState, action) {
    switch (action.type) {
        case 'SHOW_INDICATOR':
            return {
                ...state,
                indicatorStatus: true,
            };
        case 'HIDE_INDICATOR':
            return {
                ...state,
                indicatorStatus: false,
            }
        default:
            return state
    }
}