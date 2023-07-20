import { useState } from "react";

const Contact = () => {

    const [data,setData]=useState({
        fullname:"",
        phone:"",
        email:"",
        message:""
    });

    const InputEvent=(event)=>{
        const {name,value}=event.target;

        setData((preVal)=>{
            return {
                ...preVal,
                [name]:value
            }
        })
    }

    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`
        My name is ${data.fullname}. My mobile number is ${data.phone} and 
        email is ${data.email}, Here is what I want to say "${data.message}".`)

    }


    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>

            </div>
            <div className="container contact_div form">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}  >
                            <div class="mb-3">
                                <label for="name" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="name" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your fullname..." aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="mobile" class="form-label">Mobile number</label>
                                <input type="number" class="form-control" id="mobile" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter your mobile number..." aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" name="email" value={data.email} onChange={InputEvent} placeholder="Enter your email address..." aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Message</label>
                                <input type="textarea" class="form-control" name="message" value={data.message} onChange={InputEvent} placeholder="Message" id="exampleInputPassword1" />
                            </div>
                            <div className="col-12">
                                <button type="submit" class="btn btn-outline-primary">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;