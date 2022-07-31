import { useReducer } from 'react'
import {createContext} from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

//yaha pe context mei ek toh provider hota jo seedha mei export kr deta.
export const GithubProvider = ({children}) => {
    //children woh wale components honge jo enclosed honnge isske andr.

    //yeh niche stats aur functions bana rahe jo aagey sab ko de skte access jinnka.
    // const [users, setUsers] = useState([])
    // const [loading, setLoading] = useState(true)
    //uppr states thi...unnko nahi krna ab use mujhe...useSState se

    //initialState object banaya aur ussmei users ek khali array rakha aur loading ko true rkha by default.
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    //jaise useState mei krte the same waise hi kiya aur ussmei state toh state hogi aur dispatch jo hoga woh function hoga setState wale function ki tarah bas...aur useReducer hook mei hum Reducer ko pass krte hai aur inital state ko pass krte hai....reducer hai kya..bas function hai that's it.
    const [state, dispatch] = useReducer(githubReducer, initialState)

    //Get initial users (testing purpose)
    // const fetchUsers = async () => {

    //     setLoading();

    //     const res = await fetch(`${GITHUB_URL}/users`, {
    //         headers: {
    //             Authorization: `Bearer ${GITHUB_TOKEN}`
    //         }
    //     })

    //     const data = await res.json()

    //     //yaha dispatcher ko call kiya hai...action wala object bhej kr...jismei type batayega ki krna kya hai...aur payload is the data jo bhejna hai..ya jo state mei dalna hai..
    //     dispatch({
    //         //this is an action object
    //         type: 'GET_USERS',
    //         payload: data,
    //     })
    //     //payload is conventional naming scheme
    // }

    //not calling this anymore anywhere as well
    // const clearUsers = () => {
    //     dispatch({
    //         type: 'CLEAR_USERS'
    //     })
    // }

    //not calling this anymore anywhere
    // //set loading
    // const setLoading = () => {
    //     dispatch({
    //         type: 'SET_LOADING'
    //     })
    // }

    //yaha jo context hai  mera usska provider return krna hai ussmei value naam ka prop bhejna hai jo object hai which holda the things jo bhejni sabhi ko aage aur children  enclose kr diye usse provider mei...yaha dekha jaye toh technically mei saare components as children nodes le raha hu aur GihubContext.Provider mei bas value daal k unn children ko enclose kr k return kr de ra...itna kuch mushkil nahi hai.
    return <GithubContext.Provider value={{
        //ab jaise use state se single single state bana lete the ab ek hi state banaya hai bas object aur usske ander users aur loading hai so state.users and state.loading
        ...state,
        dispatch,
    }}>
        {children}
    </GithubContext.Provider>
}

//ek yaha pe GithubContext ko krta mei export
export default GithubContext

//we are not using the auth token because personal access token is getting bad credentials after some time and thus breaking the application again and again so we are just using without the auth and we will work with the lesser x-rate.
// , {
//     headers: {
//         Authorization: `Bearer ${GITHUB_TOKEN}`
//     }
// }