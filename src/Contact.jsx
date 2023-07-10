import React, { useState } from 'react';

const Contact = () => {
const [data, setData] = useState({
    fullname: '',
    email: '',
    phone: '',
    msg: '',

});
const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) =>{
        return {
            ...preVal,
            [name]: value,
        }
    })
}

    const formSubmit=(e)=>{
e.preventDefault();
alert(`${data.fullname}email ${data.email}My mobile number is ${data.phone} `
) };
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center' >Contact Us</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit} >
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name='Fullname' value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name"></input>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" name='email' value={data.email} onChange={InputEvent} placeholder="name@example.com"></input>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" name='phone' value={data.phone} onChange={InputEvent} placeholder="Mobile Number"></input>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='msg' value={data.msg} onChange={InputEvent} ></textarea>
                            </div>
                            <div className='col-12'>
                                <button className='btn btn-outline-primary' type='submit'>Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact