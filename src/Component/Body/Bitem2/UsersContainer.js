import React from 'react'
import {connect} from "react-redux";
import {followAC, setusersAC, unfollowAC} from "../../../Reduce/Users-reduser";
import UserClass from "./UserClass";

let mapStateToProps=(state)=>{
    return{
        users:state.usersPage.users
    }
}
let mapDispatch=(dispatch)=>{
    return{
        follow:(usersId)=>{
            dispatch(followAC(usersId))
        },
        unfollow:(usersId)=>{
            dispatch(unfollowAC(usersId))
        },
        setUsers:(users)=>{
            dispatch(setusersAC(users))
        }
    }
}

export default  connect(mapStateToProps, mapDispatch)(UserClass)