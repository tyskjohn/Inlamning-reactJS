import actions from './types'

const __apiurl = 'http://localhost:3001/api'

export const login = (credentials) => dispatch => {   

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
        localStorage.setItem('USER_EMAIL', res.currentUser.email)
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
    localStorage.removeItem('USER_EMAIL')
    localStorage.removeItem('USER')
}

export const getUserProfile = () => dispatch => {
        
    dispatch({
        type: actions.GET_PROFILE_SUCCESS,
        currentUser: JSON.parse(localStorage.getItem('USER'))
    })
}

export const updateProfile = (currentUser, ACCESS_TOKEN) => dispatch => {
 
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

        window.alert("Profile updated successfully")
        dispatch({
            type: actions.UPDATE_PROFILE_SUCCESS,
            currentUser: currentUser
        })

    })

}
