import {useState} from 'react'

export default function FormComponent({onSubmit}) {
    console.log("form component rendering ..");

    const [inputData, setInputData] = useState({
        name : '',
        email : '',
        place : '',
        pincode : ''
    });

    const handleInputChange  = (e) =>{
        if(e.target.name === 'name'){
            console.log('name :',e.target.value);
            setInputData({
                ...inputData,
                name : e.target.value
            })
        }
        if(e.target.name === 'email'){
            console.log('email :',e.target.value);
            setInputData({
                ...inputData,
                email : e.target.value
            })
        }
        if(e.target.name === 'place'){
            console.log('place :',e.target.value);
            setInputData({
                ...inputData,
                place : e.target.value
            })
        }
        if(e.target.name === 'pincode'){
            console.log('pincode :',e.target.value);
            setInputData({
                ...inputData,
                pincode : e.target.value
            })
        }
    }

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log("form submitted..");

            onSubmit(inputData);
        }

        return(
            <>
            <form onSubmit = {handleSubmit}>
                <input type="text" name='name' onChange = {handleInputChange} placeholder='Name' />
                <input type="email"  name='email' placeholder='Email'  onChange={handleInputChange}/>
                <input type="text"  name='place' placeholder='Place'  onChange={handleInputChange}/>
                <input type="text"  name='pincode ' placeholder='Pincode'  onChange={handleInputChange}/>
                <button type='submit'>click</button> 
            </form>
            </>
        )
    }
