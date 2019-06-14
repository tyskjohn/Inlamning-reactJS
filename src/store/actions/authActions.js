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
        dispatch({
            type: actions.LOGIN_SUCCESS,
            user: res.currentUser,
            isLoggedIn: res.success
        })

        localStorage.setItem('ACCESS_TOKEN', res.token)
        localStorage.setItem('USER_ID', res.currentUser._id)

    })

}

export const logout = (userinfo) => dispatch => {

    dispatch({
        type: actions.LOGOUT_SUCCESS
    })

    localStorage.removeItem('ACCESS_TOKEN')
    localStorage.removeItem('USER_ID')
    

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

export const get = (user, jwt) => dispatch => {

}

export const update = (user, jwt) => dispatch => {
    
}