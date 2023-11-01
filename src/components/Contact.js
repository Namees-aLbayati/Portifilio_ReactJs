import React ,{useState} from 'react'
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("xdorjklk");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit} style={{position:'relative',left:'100px'}}>
        <div class="mb-3">
  <label for="email" class="form-label">Email address</label>
  <input  id="email"
          type="email" 
          name="email" class="form-control"  placeholder="name@gmail.com"/>

        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        
         <label for="exampleFormControlTextarea1" class="form-label"> message:</label>
  <textarea class="form-control"  id="message"
          name="message" rows="3"></textarea>
        <button type="submit" className='btn btn-primary btn-lg btn-outline-dark ' style={{position:"relative",left:"240px",marginTop:'20px'}} disabled={state.submitting}>
          Submit
        </button>

</div>
</form>

    
  )
}

export default Contact
