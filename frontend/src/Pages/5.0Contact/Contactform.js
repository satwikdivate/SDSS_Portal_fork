import React from 'react'
import { useForm } from 'react-hook-form';
import { Label } from 'recharts';
import "./contact.css"
function Contactform() {

    const{register,handleSubmit,formState:{errors}}=useForm();

  return (
    <div>

    <div>Contactform</div>

    <form onSubmit={handleSubmit((data)=>console.log(data))}>
 
        <div>First Name</div>
 
        <input type='text' {...register('firstName',{required:true})}/>
        {errors.firstName && <p>First Name is required</p>}

     
        <p>Last Name</p>
        
        <input type='text' {...register('lastName',{required:true})}/>{
            errors.lastName && <p>Last Name is required</p>
        }

        <p>Phone No</p>
        <input type='text' {...register('phoneNo',{required:true})}/>{
            errors.phoneNo && <p>Phone no is required</p>
        }

        <p>Message</p>
        <input  className="type" type='text' {...register('message',{required:true})}/>{
            errors.message && <p> Message is required</p>
        }

        <button type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default Contactform