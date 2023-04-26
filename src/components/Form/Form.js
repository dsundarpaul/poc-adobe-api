import React, { useState } from 'react'
import { checkConnection } from '../../actions/apis'

const Form = () => {
    const [temp, setConnection] = useState()

    const [image, setImage] = useState()
// let temp = ''
    const handleClick = async() => {
        const t = await checkConnection()
        setConnection(t)

        console.log(temp[0])
    }
    
    const handleChange = (e) => {
        console.log(e.target.files)
        setImage(e.target.files[0])
    }

    const handleGenrate = () => {
        const formData = new FormData()
        formData.append('image', image)
        console.log(image)
    }

  return (
    <div>Form
        <button type='button' onClick={handleClick}>Click Me!</button>
        
        {temp ? <p>
            {temp[0]}
        </p> : <></>}

        <div>
            <input type='file' onChange={handleChange} />
            <button onClick={handleGenrate}>Genrate</button>
        </div>
    </div>
  )
}

export default Form