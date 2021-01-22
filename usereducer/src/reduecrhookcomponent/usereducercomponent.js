import React, { useEffect, useReducer } from 'react';


const initialState={
    loading:"",
    error:"",
    data:[]
};

function apiReducer(state,action){
    switch (action.type) {
        case "DATA_FETCH_START":
            return { ...state, loading: "yes" };
        case "DATA_FETCH_FAILURE":
            return { ...state, loading: "", error: action.payload };
        case "DATA_FETCH_SUCCESS":
            return { ...state, loading: "", data: action.payload };
        default:
            return state;
    }
}

const useFetch=(url)=>{
    const [data,dispatch] = useReducer(apiReducer,initialState);

    useEffect(()=>{
        // @ts-ignore
        dispatch({type: "DATA_FETCH_START"});

    fetch(url)
      .then(response => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then(json => {
          console.log(`In fetch ${JSON.stringify(json.response)}`);
        // @ts-ignore
        dispatch({type: "DATA_FETCH_SUCCESS", payload: json.response });
      })
      .catch(error => {
        // @ts-ignore
        dispatch({ type: "DATA_FETCH_FAILURE", payload: error.message });
      });
    },[]);
    return data;
};


const UseReducerComponent=()=>{
    const data = useFetch("http://localhost:9090/api/departments");
    return (
        <div>
          <ul>
              {
                  data.data.map((d,i)=>(
                    <li key={i}>{JSON.stringify(d)}</li> 
                  ))
              }
          </ul>
        </div>
      );
};

export default UseReducerComponent;
