
export const addData = data =>({
    type : 'ADD_DATA',
    data
});

export const clearData = () =>({
    type : "CLEAR_DATA"
});

// fetch data from api
export const getData = () => async dispatch =>{
    try{
        const url = "https://5d3ddc4f139f4200145323bf.mockapi.io/movies";
        const response = await fetch(url);
        const responseBody = await response.json();
        dispatch(addData(responseBody));
    }
    catch(error){
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