import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group';

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow:true
         }
        this.toToggole=this.toToggole.bind(this)
    }
    render() { 
        return ( 
            <div>                
                {/* <div className={this.state.isShow?'show':'hide'}>Boss级任务-孙悟空</div> */}
                <CSSTransition 
                    in={this.state.isShow}   //用于判断是否出现的状态
                    timeout={2000}           //动画持续时间
                    className="boss-text"    //className值，防止重复
                    unmountOnExit
                >
                    <div>Boss级任务-孙悟空</div>
                </CSSTransition>

                <div><button onClick={this.toToggole}>召唤Boss</button></div>
            </div>
         );
    }

    toToggole(){
        this.setState({
            isShow:this.state.isShow?false:true
        })
    }
}
 
export default Boss;