import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';

// redux actions
export const addData = data =>({
    type : 'ADD_DATA',
    data
});

export const clearData = () =>({
    type : "CLEAR_DATA"
});

export const getData = () => async dispatch =>{
    try{
         const url = "https://5d3ddc4f139f4200145323bf.mockapi.io/movies";
        const response = await fetch(url);
        const responseBody = await response.json();
        console.log(responseBody)
        dispatch(addData(responseBody));
    }
    catch(error){
        console.error(error);
        dispatch(clearData());
    }
};

export const removeMovie = movie => ({
    type : "REMOVE_MOVIE",
    movie
});

export const addMovie = movie => ({
    type : "ADD_MOVIE",
    movie
})

//redux reducers

const defaultState = {
    mylist: [],
    recommendations: [],
  };

export const getDataReducer = (state = defaultState, action) =>{
    switch(action.type){
        case 'ADD_DATA':
            return action.data;
        case 'CLEAR_DATA':
            return [];
        case 'REMOVE_MOVIE':
            console.log(action.movie);
            const mylistMovie = state.mylist.filter((item) => {
                return action.movie.id !== item.id;
            });
            console.log(mylistMovie);
            return{
                ...state,
                mylist: mylistMovie,
                recommendations:[...state.recommendations, action.movie]
            };
        case 'ADD_MOVIE':
            console.log(action.movie);
            const recommendationsMovie = state.recommendations.filter((item) => {
                return action.movie.id !== item.id;
            });
            console.log(recommendationsMovie);
            return{
                ...state,
                recommendations: recommendationsMovie,
                mylist: [...state.mylist, action.movie]
            };
        default:
            return state;

    }
};

export const reducers = combineReducers({getDataReducer});

//redux store

export function configureStore() {
    const store = createStore(reducers,  applyMiddleware(thunk));
    return store;
}
  
export const store = configureStore();