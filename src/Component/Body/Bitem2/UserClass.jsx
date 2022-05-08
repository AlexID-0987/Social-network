import React from "react";
import us1 from "./users.module.css";
import axios from "axios";
class UserClass extends React.Component{
    componentDidMount() {
        axios.get(`http://localhost:3333/users?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`)
            .then(resp=>{
                console.log(resp)
                this.props.setUsers(resp.data)

            })
        axios.get('http://localhost:3333/users')
            .then(resp=>{
                console.log(resp)
                this.props.setTotalUsersCount(resp.data.length)
                console.log(resp.data.length)
            })
    }

    onPageChanget=(pageNumber)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`http://localhost:3333/users?_page=${pageNumber}&_limit=${this.props.pageSize}`)
            .then(resp=>{
                console.log(resp)
                this.props.setUsers(resp.data)
                console.log(resp)
            })
    }
    render(){
        let pageCount=Math.ceil(this.props.totalUsers/this.props.pageSize)
        let pages=[]
        for (let i=1;i<=pageCount;i++)
        {
            pages.push(i)
        }
        return(
            <>
                <div className={us1.count}>
                {pages.map(p=>{return <span className={this.props.currentPage === p && us1.select}
                                                 onClick={(e)=>{this.onPageChanget(p)}}>{p}</span>})}
                </div>
                <div className={us1.item}>

                    {
                        this.props.users.map(us=><div className={us1.item1} key={us.id}>
                            <div className={us1.item3}>
                                <div className={us1.item2}>
                                    <img src={us.photo != ' ' ? us.photo:"https://papik.pro/uploads/posts/2021-09/1630490068_3-papik-pro-p-smailiki-risunki-3.jpg"}/>
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
                <div className={us1.count}>
                    {pages.map(p=>{return <span className={this.props.currentPage === p && us1.select}
                                                onClick={(e)=>{this.onPageChanget(p)}}>{p}</span>})}
                </div>
            </>
        )
    }
}
export default UserClass