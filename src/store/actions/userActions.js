export const initialUserValue = {
    loggedIn : false,
    role : "administrator",
    userList : [],
    lastUserId : 0
}

export const userActions = {
    login : (prevState,input) => {
        if(input.name === undefined){
            return 
        }
        let appUser = verifyCurrentUser(prevState, input.name);
        console.log("appUser user "+JSON.stringify(appUser,0,4))
        let updatedUserState = undefined
        if(appUser === undefined){
            const newId = generateNextUserId(prevState)
            appUser = {name : input.name, userid : newId}
            console.log("New user created"+appUser.name)
            updatedUserState = {...prevState.userdata,loggedIn : true,currentUser : appUser,userList : [...prevState.userdata.userList,appUser],lastUserId : newId}
        }else{
            updatedUserState = {...prevState.userdata,loggedIn : true,currentUser : appUser}
        }
        console.log("login updatedState "+JSON.stringify(updatedUserState,0,4))
        const userdata = {...updatedUserState}
        const finalState = {...prevState,userdata}
        console.log("login finalState "+JSON.stringify(finalState,0,4))
        return finalState
    },
    logout : (prevState) => {
        const updatedState = {loggedIn : false,currentUser : []}
        const userdata = {...prevState.userdata,...updatedState}
        const finalState = {...prevState,userdata}
        console.log("logoff finalState "+JSON.stringify(finalState,0,4))
        return finalState
    }
}

const verifyCurrentUser = (state,passedUser) => {
    let currentUser = state.userdata.userList.map((user) => {
        if(user.name === passedUser){
            console.log("Existing user "+user.name)
            return user;
        }else{
            return undefined;
        }
    })

    console.log("verifyCurrentUser  "+(currentUser[0] == undefined) ? "undefined" :currentUser[0].name)
    return currentUser[0];
}

const generateNextUserId = (state) => {
    return state.userdata.lastUserId+1;
}
