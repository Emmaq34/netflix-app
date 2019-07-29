
const defaultState = {
    mylist: [],
    recommendations: [],
  };

export const reducers = (state = defaultState, action) =>{
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