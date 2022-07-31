// https://www.robinwieruch.de/javascript-reducer/

//this is an article on reducers...take a read if you want to revise reducers.

//basically agr dekha jaye, toh reducers kuch nahi hai, functions hai maatr jinnmei do cheesei pass krenge hum ek toh state aur ek action jo uss state pr krna hai...action ek object hoga jisski ek property hogi type jo string hogi aur uss ko switch case mei laga kr pata chalega ki hummei krna kya hai state k sath.

//reducers redux ka important part hai...redux is 3rd party state management tool. 

const githubReducer = (state, action) => {
    switch(action.type)
    {
        case 'GET_USERS':{
            return{
                //states immutable hotte so unnko pehley rkhna hotta hummei..seedha reassign nahi kr skta
                ...state,
                //yaha users ko payload k barabr kr diya
                users: action.payload,
                //loading ki false kr diya.
                loading: false,
            }
        }
        case 'GET_USER_AND_REPOS': {
            return {
                ...state,
                user: action.payload.user,
                repos: action.payload.repos,
                loading: false,
            }
        }
        // case 'GET_USER': {
        //     return {
        //         ...state,
        //         user: action.payload,
        //         loading: false
        //     }
        // }
        // case 'GET_REPOS': {
        //     return{
        //         ...state,
        //         repos: action.payload,
        //         loading: false
        //     }
        // }
        case 'SET_LOADING':{
            return{
                ...state,
                loading: true
            }
        }
        case 'CLEAR_USERS': {
            return{
                ...state,
                users: [],
                loading: false,
            }
        }
        default:{
            return state
        }
    }
}

export default githubReducer