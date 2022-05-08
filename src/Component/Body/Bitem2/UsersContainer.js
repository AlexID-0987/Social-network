import React from 'react'
import {connect} from "react-redux";
import {followAC, setPageCountAC, setTotalUserAC, setusersAC, unfollowAC} from "../../../Reduce/Users-reduser";
import UserClass from "./UserClass";

let mapStateToProps=(state)=>{
    return{
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsers:state.usersPage.totalUsers,
        currentPage:state.usersPage.currentPage
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
        },
        setCurrentPage:(currentPage)=>{
            dispatch (setPageCountAC(currentPage))
        },
        setTotalUsersCount:(totalUsers)=>{
            dispatch (setTotalUserAC(totalUsers))
        },
    }
}

export default  connect(mapStateToProps, mapDispatch)(UserClass)