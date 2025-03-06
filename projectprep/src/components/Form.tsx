import { Button } from '@chakra-ui/react'
import {useForm} from 'react-hook-form'



const Form=()=>{

    interface datatype{
        name:string,
        age:number
    }
    const{
        register,
        handleSubmit,
        watch,
        formState:{errors,isSubmitting}
        
    }=useForm<datatype>()

    const sub=(data:datatype)=>{
        alert(`form submitted successfully ,${data}`)
    }
    return(
        <>
        <form onSubmit={handleSubmit(sub)}>
        <input type="text" placeholder='name' 
        {...register('name',{
            minLength:{value:3,message:'length should be atleast 3'},
            required:true
        }
        ) }/>
{errors.age && <p style={{ color: 'red' }}>{errors.name.message}</p>}

     

        <input type="number" placeholder='age'
        {...register('age',{
            maxLength:{
                value:2,
                message:'max length can be 2 digits'
            },
            required:true
        })}/>
        
{errors.name && <p style={{ color: 'red' }}>{errors.age.message}</p>}

        </form>
        
        <button onClick={handleSubmit(sub)}>submit</button>


        </>
    )
}
export default Form