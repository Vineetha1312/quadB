import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './index.css'

const Home = () => { 
    const history = useNavigate()
    const [inpVal, setInpVal] = useState({
        name : '',
        email : '',
        date : '',
        password : ''
    })

    const [data, setData] = useState([])
    
    const getData = event => {
        const {value,name} = event.target
        
        setInpVal(() => {
            return{
                ...inpVal,
                [name]:value
            }
        })
    }

    const addData = event => {
        event.preventDefault()
        
        const {name,email,date,password} = inpVal

        if(name === ''){
            alert('name field is required')
        }else if(email === ''){
            alert('email field is required')
        }else if(!email.includes('@')){
            alert('please enter valid email address')
        }else if(date === ''){
            alert('date field is required')
        }else if(password === ''){
            alert('password field is required')
        }else if(password.length < 5){
            alert('password length must be greater five')
        }else{
            console.log('data added successfully')
            history('/login')
            localStorage.setItem('userDetails',JSON.stringify([...data,inpVal]))
            setInpVal({name : '',
            email : '',
            date : '',
            password : ''})
        }
    }

    return(
    <div className='signup-bg'>
                <form className='signup-section'>
                    <h1 className='signup-heading'>Sign Up</h1>
                    <div className='input-section'>
                        <label htmlFor='name' className='label-text'>Name</label>
                        <input type='text' className='input-element' id='name' placeholder='Enter your name' onChange={getData} name='name'/>
                    </div>
                    <div className='input-section'>
                        <label htmlFor='email' className='label-text'>Email</label>
                        <input type='email' className='input-element' id='email' placeholder='Enter your email' onChange={getData} name='email'/>
                    </div>
                    <div className='input-section'>
                        <label htmlFor='date' className='label-text'>Date</label>
                        <input type='date' className='input-element' id='date' onChange={getData} name='date'/>
                    </div>
                    <div className='input-section'>
                        <label htmlFor='password' className='label-text'>Password</label>
                        <input type='password' className='input-element' id='password' placeholder='Enter your password' onChange={getData} name='password'/>
                    </div>
                    <div className='checkbox-section'>
                        <input type='checkbox' id='checkbox' className='checkbox'/>
                        <label htmlFor='checkbox' className='label-text'>Remember me</label>
                    </div>
                    <button type='button' className='submit-button' onClick={addData}>Submit</button>
                    <p className='signup-text'>Already have an account <Link to='/login'>SignIn</Link></p>
                </form>
                <img src='https://res.cloudinary.com/dwlbneeh4/image/upload/v1696772996/loginpic_ixihst.jpg' className='signup-image' alt='signup'/>
            </div>
)
}

export default Home