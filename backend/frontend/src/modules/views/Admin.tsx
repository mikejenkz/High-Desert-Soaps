import { useContext } from "react";
import { UserContext } from "../../App";
import axios from "axios";
import { useState } from "react";
import { Card } from "react-bootstrap";




// export const handleSubmit = async() =>{
//     let response = await axios.get('/allusers/')
//     console.log(response.data)
//     setAllUsers(response.data.users)
//     console.log(allUsers)
//     return response.data
// }

// export const handleSubmit2 = async() =>{
//     let response = await axios.get('/allsubscribers/')
//     setAllSubscribers(response.data.emails)
//     console.log(allSubscribers)
//     console.log(response.data)
//     return response.data
// }

export default function Admin() {
    const [allUsers, setAllUsers] = useState([])
    const [allSubscribers, setAllSubscribers] = useState([])
    const [refresher, setRefresher] = useState(0)
    const {user}:any = useContext(UserContext)
    //console.log(user)

    const handleSubmit = async() =>{
        let response = await axios.get('/allusers/')
        //console.log(response.data)
        setAllUsers(response.data.users)
        //console.log(allUsers)
        return response.data
    }

    const handleSubmit2 = async() =>{
        let response = await axios.get('/allsubscribers/')
        setAllSubscribers(response.data.emails)
        //console.log(allSubscribers)
        //console.log(response.data)
        return response.data
    }

    const deleteSubscriber = async(item:any) =>{
        let response = await axios.post('/deletesubscriber/',{'user':item})
        //console.log(response.data)
        alert(`You have deleted the subscriber ${item}`)
        handleSubmit2()
        return response.data
    }

    const deleteUser = async(item:any) =>{
        let response = await axios.post('/deleteuser/',{'user':item})
        console.log(response.data)
        alert(`You have deleted the user ${item}`)
        handleSubmit()
        return response.data
    }


    if(user.username == 'chapin.huskies@yahoo.com') { 
    return(
        <div> 
        <h1>Admin Page</h1>

        
        <button onClick = {handleSubmit}> See all Users</button>
        <button onClick = {handleSubmit2}> See all Subscribers</button>
<a style={{display:'inline-block', justifyContent:'space-between', width:'100%'}}>
{allUsers.map((i, item) => ( 

      <Card bg="primary" style={{ width: '50%', height: '5rem'}}>
        <Card.Title style={{color:'blue'}}>
            User: {i}
        </Card.Title>
        <Card.Body> 
      <button onClick = { () => deleteUser(i)} style={{backgroundColor:'red',color:'white'}}>Delete User</button>
      </Card.Body>
      </Card>
            ))}
        </a>

        <a style={{display:'inline-block',width:'100%',justifyContent:'space-between',position:'relative'}}>
{allSubscribers.map((i, item) => ( 

      <Card style={{ width: '50%', height: '5rem'}}>
        <Card.Title style={{color:'green'}}>
            Subscriber: {i}
        </Card.Title>
        <Card.Body> 
      <button onClick = { () => deleteSubscriber(i)} style={{backgroundColor:'red',color:'white'}}>Delete Subscriber</button>
      </Card.Body>
      </Card>
            ))}
        </a>
        </div>
    )
    }
     else {
         return(
             <div>
                 <h1> You do not have admin rights.</h1>
             </div>
         )
    }
}