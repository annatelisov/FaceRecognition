import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f3'>
                <h3>This magic brain will detect faces in your pictures</h3>
            </p>
            <div className=''>
                <input className='f4 pa2 w-70' type='text' onChange={onInputChange}/>
                <button onClick={onButtonSubmit} className='w-30 grow f4 link ph3 pv2 dib white bg-light'>Click me</button>
            </div>
        </div>
    )
}

export default ImageLinkForm;