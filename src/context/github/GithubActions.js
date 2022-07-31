//this is the actions file jismei hum functions rakh le rahe hai context file mei the jo and then hum unn functions ko call kr k dispatch ko hi direct uss component se call kr de rahe hai jis mei data dalna hai.

import axios from 'axios'

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: { Authorization: `token ${GITHUB_TOKEN}` },
})

export const searchUsers = async (text) => {
    //setLoading();

    // const params = new URLSearchParams({
    //     q:text
    // })

    console.log(text);

    // console.log(params);

    //below is the fetch version of the http request
    // const res = await fetch(`${GITHUB_URL}/search/users?q=${text}`)

    // const {items} = await res.json()

    // console.log(items);

    const res = await github(`/search/users?q=${text}`)

    //yaha dispatcher ko call kiya hai...action wala object bhej kr...jismei type batayega ki krna kya hai...aur payload is the data jo bhejna hai..ya jo state mei dalna hai..
    // dispatch({
    //     //this is an action object
    //     type: 'GET_USERS',
    //     payload: items,
    // })
    //payload is conventional naming scheme

    return res.data.items;
}

//get user and repos data

export const getUserAndRepos = async(login) => {
    //this Promise.all takes in array of request and then ussey multiple requests ho jayenge
    const [user, repos] = await Promise.all(
        [
            github.get(`/users/${login}`),
            github.get(`/users/${login}/repos`)
        ]
    )

    return {user: user.data, repos: repos.data}
}

//pehley we were having two functions for getting the user data and the repos data.

//Get a single user
// export const getUser = async (login) => {

//     // setLoading();

//     // const params = new URLSearchParams({
//     //     q:text
//     // })

//     // console.log(text);

//     // console.log(params);

//     const res = await fetch(`${GITHUB_URL}/users/${login}`)

//     if(res.status === 404)
//     {
//         window.location = '/notfound'
//     }
//     else{
//         const data = await res.json()

//         //yaha dispatcher ko call kiya hai...action wala object bhej kr...jismei type batayega ki krna kya hai...aur payload is the data jo bhejna hai..ya jo state mei dalna hai..
//         // dispatch({
//         //     //this is an action object
//         //     type: 'GET_USER',
//         //     payload: data,
//         // })
//         //payload is conventional naming scheme

//         return data
//     }

// }

// //Get user repos
// export const getUserRepos = async (login) => {

//     // setLoading();

//     // const params = new URLSearchParams({
//     //     q:text
//     // })


//     // console.log(params);

//     const res = await fetch(`${GITHUB_URL}/users/${login}/repos?sort=created&per_page=10`)

//     const data = await res.json()

//     //yaha dispatcher ko call kiya hai...action wala object bhej kr...jismei type batayega ki krna kya hai...aur payload is the data jo bhejna hai..ya jo state mei dalna hai..
//     // dispatch({
//     //     //this is an action object
//     //     type: 'GET_REPOS',
//     //     payload: data,
//     // })
//     //payload is conventional naming scheme

//     return data
// }