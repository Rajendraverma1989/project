import React from 'react';
import "./styles.scss";
import MyBoard from '../../components/myBoard';
import data from '../../BoardData.json';

const Homepage = (props) => {
return(
    <div className='homepage'>
       { data.data.map((record, i) => {
            return( <MyBoard key={i} {...record}/>)
        })
    }
    </div>
);
}
export default Homepage;