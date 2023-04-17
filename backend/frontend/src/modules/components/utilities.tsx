import axios from 'axios';

export const signUp = async(name:any, email:any, password:any) => {
    let response = await axios.post('/user/signup/' , {
        'name': name,
        'email' : email,
        'password' : password
    })
    console.log(response.data.success)
    return response.data.success
}


export const logIn = async(email:any, password:any, setUser:any) => {
    let response = await axios.post('/user/login/', {
        'email' : email,
        'password' : password
    })

    setUser(response.data)
}

export const currUser = async() =>{
    let response = await axios.get('/user/curruser/')
    console.log(response.data)
    return response.data
}

export const logOut = async(setUser:any) => {
    let response = await axios.post('/user/logout/')
    if(response.data.logout){
        setUser(null)
    }
}