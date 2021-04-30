import React, {useState} from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import sha1 from 'sha1';

function ImageUploader(){
    const [storedImage, setStoredImage] = useState('')

    const handleDrop =(files) =>{
        console.log(files)
        const image = files[0]

        const url = 'https://api.cloudinary.com/v1_1/dluh5sm7o/image/upload'
        const timeStamp = Date.now()/1000
        const uploadPreset = 'cskavos5'
        const paramsStr = `timestamp=${timeStamp}&upload_preset=${uploadPreset}${process.env.API_SECRET}`
        const signature = sha1(paramsStr)
        const params = {
            'api_key': "769252331918223",
            'timestamp': timeStamp,
            'upload_preset': uploadPreset,
            'signature': signature
        };

        const formData = new FormData();
        formData.append('api_key', '');
        formData.append('file' , image);
        formData.append('timestamd', timeStamp);
        formData.append('upload_preset', uploadPreset)

        axios.post(url, formData)
        .then(res =>{
            console.log(res)
            setStoredImage({
                'image_url': res.data.url
            })
        })
        .catch(error =>{
            console.log(error)
        })
    };



    return(
        <div className='dropzone'>
            <Dropzone onDrop={handleDrop}>
              {({getRootProps, getInputProps}) => (
                <section>
                  <div {...getRootProps()}>
                    <div className='x-in-drop'>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop an image here, or click to select files</p>
                    </div>
                  </div>
                </section>
              )}
            </Dropzone>
        </div>
    )
};

export default ImageUploader;