import React from 'react';
import { useSelector } from 'react-redux';

function Header() {

   const {taskList}= useSelector((state)=>state.tasks)
    return ( 

        <div className='text-center'>
            <h2 className=' text-secondary'>Task Management</h2>
            <p>{`No.of Available Task ${taskList.length}`}</p>
        </div>
     );
}

export default Header;