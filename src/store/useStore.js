import React,{createContext,useContext,useReducer} from 'react'
import {initialUserValue,userActions} from './actions/userActions'
import {initialTheme} from './actions/themeActions'

const initialState = {
    userdata : {
        ...initialUserValue
    },
    themeData : {
        ...initialTheme
    }
}

const rootReducer = (state,action) => {
    switch(action.type){
        case "login": 
            return userActions.login(state,action.payload);
        case "logout":
            return userActions.logout(state);
        default:
            return state
    }
}
const StoreContext = createContext(initialState);

export const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(rootReducer, initialState);
    return(
        <StoreContext.Provider value={{state,dispatch}}>
            {children}
        </StoreContext.Provider>
    )
}


export const useStore = (store) => {
    const {state,dispatch} = useContext(StoreContext)
    return {state,dispatch}
}
