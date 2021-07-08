import { FETCH_TAGS, FETCH_TAG, UPDATE_TAG } from "../constants/ActionTypse";

export default (state = { tags: [] }, action) => {
    switch (action.type) {
        case FETCH_TAGS:
            return {
                ...state,
                tags: action.payload
            };
        case FETCH_TAG:
            return { ...state, tag: action.payload.tag };
        case UPDATE_TAG:
            return { ...state, tags: state.tags.map((tag) => tag._id === action.payload._id ? action.payload : tag) };
        default:
            return state;
    }

}