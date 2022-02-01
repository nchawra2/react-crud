import React from 'react';
import spinner from '../../assets/spinner.gif';

 const Spinner = () => {
    return (
        <React.Fragment>
            <div className='d-flex justify-content-center'>
                <img src={spinner} alt=""/>
            </div>
        </React.Fragment>
    )
}

export default Spinner;