import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const CustomerRegistration = () => {

    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [mobileNumber,setMobileNumber]=useState('')
    const [email,setEmail]=useState('')
    const [address,setAddress]=useState('')

    function save(e){
        e.preventDefault()
        const detals={name,age,mobileNumber,email,address}
        console.log(detals);

    }

    return(
        <div className='container'>
        <br /> <br />
        
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <div className='card-body'>
                    <form>
                    <label className='form-label'>Customer registration</label>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Customer Name</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Customer Name'
                                name='name'
                                value={name}
                               onChange={(e)=>setName(e.target.value)}
                            >
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Customer Age:</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Customer Age'
                                name='age'
                                value={age}
                                onChange={(e)=>setAge(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Customer Mobile Number:</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Customer Mobile Number'
                                name='mobile'
                                value={mobileNumber}
                                onChange={(e)=>setMobileNumber(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Customer Email:</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Customer Email'
                                name='email'
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Customer Address:</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Customer Address'
                                name='address'
                                value={address}
                                onChange={(e)=>setAddress(e.target.value)}
                            >
                            </input>
                        </div>

                        <button className='btn btn-success' onClick={(e)=>save(e)} >Submit</button>
                    </form>

                </div>
            </div>

        </div>
    </div>
  )
    

}
export default CustomerRegistration