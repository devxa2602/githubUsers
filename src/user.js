import React from 'react'
import {Link} from 'react-router-dom'
function user(props) {
    return (
         <div className="row sideBar-body">
           <div className="col-md-2 col-sm-2 col-xs-2 sideBar-avatar">
             <div className="avatar-icon">
               <img src={props.img}/>
               </div>
           </div>
           <div className=" col-md-10 col-sm-10 col-xs-10 sideBar-main">
             <div className="row">
               <div className="col-sm-8 col-xs-8 sideBar-name">
                 <span className="name-meta">{props.name}
               </span>
               </div>
               <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                 <span className="time-meta pull-right">
                 <button>
					<Link to={{
                            pathname:`/UserDetail/${props.name}`,
                            state:{userName:props.name}
                        }}>Details
					</Link></button>
               </span>
               </div>
             </div>
           </div>
         </div>
     
    )
}

export default user

