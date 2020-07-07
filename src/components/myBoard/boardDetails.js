import React from 'react';
import "./styles.scss";
import CartIcon from '../cart-icon'; 

class BoardDetails extends React.Component {


    render() {
        const color ="red";
        console.log('tittle 11111::', this.props.boarderColor)
return(
       <div className='gradeInfo'>
       <div className='boardHeader'>
     <span className='expand'>{this.props.title}</span>
       <span className='expandicon'>...</span>
       </div>
       <div className='facultiInfo'>
        <div className='users'>{this.props.usser.map( (name, index) => {
            return <div key={index} >
                <CartIcon />            
            </div>
        })        
        }</div>
            <div className='rightInfo'>
    <div className='showDate'>{this.props.date}</div>
           <div className='progress'>{this.props.progress}%</div>
            </div>
        </div> 
       </div> 
);
    }
}
export default BoardDetails;