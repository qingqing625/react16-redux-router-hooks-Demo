import React, { Component } from 'react';
import {Link} from "react-router-dom"
// import {Link, Redirect} from "react-router-dom"

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {cid:1,title:'fq的个人博客'},
                {cid:2,title:'fq的个人博客'},
                {cid:3,title:'fq的个人博客'}
            ]
        }
        this.props.history.push("/home/")
    }
    render() { 
        return ( 
            <div>
                {/* <Redirect to="/home/" /> */}
                <h2>Index-page</h2>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <Link to={'/list/' + item.cid}>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul> 
            </div>
        );
    }
}
 
export default Index;