import React from "react";
import us1 from "./users.module.css";
import axios from "axios";
class UserClass extends React.Component{
    constructor(props){
        super(props)
        axios.get("http://localhost:3333/users")
            .then(resp=>{
                this.props.setUsers(resp.data)
            })
    }
    /*getUsers=()=>{
     if(this.props.users.length===0){
         axios.get("http://localhost:3333/users")
             .then(resp=>{
                 this.props.setUsers(resp.data)
             })
     }*/
    //}
    render(){
        return(
            <>
                <div className={us1.item}>
                    {
                        this.props.users.map(us=><div className={us1.item1} key={us.id}>
                            <div className={us1.item3}>
                                <div className={us1.item2}>
                                    <img src={us.photo != null? us.photo:'1568622546_2.jpeg'}/>
                                    <div>
                                        {us.relation?<button onClick={()=>{this.props.unfollow(us.id)}}>Unfollow</button>
                                            :<button onClick={()=>{this.props.follow(us.id)}}>Follow</button>}
                                    </div>
                                </div>
                                <div className={us1.item4}>
                                    <div>{us.name}</div>
                                    <div>{us.status}</div>
                                    <div>{us.country}</div>
                                    <div>{us.id}</div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </>
        )
    }
}
export default UserClass