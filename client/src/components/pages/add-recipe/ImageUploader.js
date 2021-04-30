import React, {useState} from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';

function ImageUploader(){

    const handleDrop =(files) =>{
        const image = files[0]

        const url =
    }



    return(
        <div className='dropzone'>
            <Dropzone

            />
        </div>
    )
};

export default ImageUploader;