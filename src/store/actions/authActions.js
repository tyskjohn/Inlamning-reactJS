import actions from './types'

const __apiurl = 'http://localhost:3001/api'

export const login = (credentials) => dispatch => {   
    // fetch(__apiurl + '/angularUsers/login', {
    //    method: 'POST',
    //    headers: {
    //        'content-type': 'application/json'
    //    },
    //    body: JSON.stringify(credentials) 
    // })
    // .then(res => res.json())
    // .then(res => {
    //     if(res.success) {

    //         localStorage.setItem('USER_ID', res["id"])
    //         localStorage.setItem('ACCESS_TOKEN', res["token"])

    //         dispatch({
    //             type: actions.LOGIN_SUCCESS,
    //             currentUser: res.currentUser,
    //             isLoggedIn: res.success
    //         })
            
    //     } else {
    //         dispatch({
    //             type: actions.LOGIN_FAILED,
    //             errorMessage: res.errorMessage
    //         })        
    //     }
    // })
    // .catch(error => {
    //     dispatch({
    //         type: actions.LOGIN_FATALERROR,
    //         errorMessage: error
    //     })         
    // })

    // ny kod

    fetch(`${__apiurl}/angularUsers/login`, {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(res => {

        localStorage.setItem('ACCESS_TOKEN', res.token)
        localStorage.setItem('USER_ID', res.currentUser._id)
        localStorage.setItem('USER', JSON.stringify(res.currentUser))

        dispatch({
            type: actions.LOGIN_SUCCESS,
            currentUser: JSON.parse(localStorage.getItem('USER')),
            isLoggedIn: res.success
        })

    })

}

export const logout = () => dispatch => {

    dispatch({
        type: actions.LOGOUT_SUCCESS
    })

    localStorage.removeItem('ACCESS_TOKEN')
    localStorage.removeItem('USER_ID')
    localStorage.removeItem('USER')
    

    // fetch(__apiurl + '/angularUsers/logout', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json',
    //         'authorization': 'bearer ' + userinfo.token
    //     },
    //     body: JSON.stringify(userinfo)
    // })
    // .then(res => res.json())
    // .then(res => {
    //     if(res.success) {
            
    //         dispatch({
    //             type: actions.LOGOUT_SUCCESS
    //         })
    //     } else {
    //         dispatch({
    //             type: actions.LOGOUT_FAILED,
    //             errorMessage: res.errorMessage
    //         })        
    //     }
    // })
    // .catch(error => {
    //     dispatch({
    //         type: actions.LOGOUT_FATALERROR,
    //         errorMessage: error
    //     })         
    // })



}

export const getUserProfile = () => dispatch => {
    
/*     let userId = localStorage.getItem('USER_ID');
    
    fetch(`${__apiurl}/angularUsers/${userId}`, {
        method: 'GET',
        headers: {
            'content-type' : 'application/json',
            'authorization' : 'bearer ' + ACCESS_TOKEN
        }
    })
    .then(res => res.json())
    .then(res => {
        dispatch({
            type: actions.GET_PROFILE_SUCCESS,
            currentUser: res.currentUser
        })

        localStorage.setItem('USER', JSON.stringify(res.currentUser))

    }) */
    
    dispatch({
        type: actions.GET_PROFILE_SUCCESS,
        currentUser: JSON.parse(localStorage.getItem('USER'))
    })
}

// export const updateProfile = (currentUser, ACCESS_TOKEN) => dispatch => {
    

//     let userId = localStorage.getItem('USER_ID');
//     let ACCESS_TOKEN = localStorage.getItem('ACCESS_TOKEN')

//     console.log(ACCESS_TOKEN)   

//     fetch(`${__apiurl}/angularUsers/${userId}`, {
//         method: 'PATCH',
//         headers: {
//             'content-type': 'application/json',
//             'authorization': 'bearer ' + ACCESS_TOKEN
//         },
//         body: JSON.stringify(currentUser)
//     })
//     .then(res => res.json())
//     .then(res => {
        

//         localStorage.setItem('USER', JSON.stringify(currentUser))

//         dispatch({
//             type: actions.UPDATE_PROFILE_SUCCESS,
//             currentUser: currentUser
//         })

        
//     })       

// }

export const updateProfile = (currentUser, ACCESS_TOKEN) => dispatch => {
    console.log(ACCESS_TOKEN);

    // let userId = localStorage.getItem('USER_ID');
 
    fetch(`${__apiurl}/angularUsers/${currentUser._id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            'authorization': 'bearer ' + ACCESS_TOKEN
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(res => {


        localStorage.setItem('USER', JSON.stringify(currentUser))

        console.log(currentUser)
        window.alert("Profile updated successfully")
        dispatch({
            type: actions.UPDATE_PROFILE_SUCCESS,
            // currentUser: JSON.parse(localStorage.getItem('USER'))
            currentUser: currentUser
        })

    })

}