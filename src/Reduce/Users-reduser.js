const FOLLOW='FOLLOW_USER',UNFOLLOW='UNFOLLOW_USERS',SET_USERS='SET_USERS',SET_PAGE='SET_CURRENT_PAGE',
    SET_TOTAL='SET_TOTAL_USERS'
let initialState={
    users: [],
    pageSize:3,
    totalUsers:0,
    currentPage:1

}
const userReduser=(state=initialState,action)=>{
    switch (action.type){
        case FOLLOW:
            return {
                ...state,
                //users: [...state.users]
                users:state.users.map(u=>{
                    if(u.id===action.userId){
                        return {...u,relation:true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                //users: [...state.users]
                users:state.users.map(u=>{
                    if(u.id===action.userId){
                        return {...u,relation:false}
                    }
                    return u
                })
            }
        case SET_USERS:
            //return {...state, users:action.users}
            return {...state, users:action.users}
        case SET_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL:
            return {...state,totalUsers:action.count}
        default:
            return state
    }
}
export const followAC=(userId)=>({type:FOLLOW,userId})
export const unfollowAC=(userId)=>({type:UNFOLLOW,userId})
export const setusersAC=(users)=>({type:SET_USERS, users})
export const setPageCountAC=(currentPage)=>({type:SET_PAGE,currentPage})
export const setTotalUserAC=(totalcount)=>({type:SET_TOTAL,count:totalcount})

export default userReduser