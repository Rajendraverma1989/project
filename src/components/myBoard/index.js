import React from 'react';
import "./styles.scss";
import BoardDetails from './boardDetails.js';
const boarderColor = 
{
    "On Track": '#4d94ff',
    "Delayed": '#FF5733',
    "On Hold": '#FFC300'
}

class MyBoard extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            title: this.props.title || 'Progress',
            data: this.props.records || [],
            boarderColor: boarderColor[this.props.title]
        }
    }
    static getDerivedStateFromProps(props, state) {
        if (props.records !== state.records) {
          return {
            data: props.records,
          };
        }
        return null;
      }
    render() {
return(
    <div className="boardlayout">
        <div className='boardHeader'>
<span className='boardtitle'>{this.state.title}</span>
       <span className='boardtitle'>...</span>
       </div>
       <div >
       { this.state.data.map((record, i) => {
            return( <BoardDetails key={i} {...record} boarderColor ={this.state.boarderColor}/>)
        })
    }
       </div>
    </div>
);
    }
}
export default MyBoard;