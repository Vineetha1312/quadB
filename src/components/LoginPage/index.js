import {useState} from 'react'
import { useNavigate, Link} from 'react-router-dom'
import './index.css'

const LoginPage = () => {
    const history = useNavigate()
        const [inpVal, setInpVal] = useState({
            email : '',
            password : ''
        })
    
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

            const getUserDetailsArr = localStorage.getItem('userDetails');
            console.log(getUserDetailsArr)
            
            const {email,password} = inpVal
            
            
           if(email === ''){
                alert('email field is required')
            }else if(!email.includes('@')){
                alert('please enter valid email address')
            }else if(password === ''){
                alert('password field is required')
            }else{
                if(getUserDetailsArr && getUserDetailsArr.length){
                    const userData = JSON.parse(getUserDetailsArr);
                    const userLogin = userData.filter((ele,k) => {
                        return ele.email === email && ele.password === password
                    });
                    
                    if(userLogin.length === 0){
                        alert('Invalid details')
                    }else{
                        localStorage.setItem('userLogin', JSON.stringify(getUserDetailsArr))
                        history('/language')
                        
                    }
                }
            }
        }
    
        return(
        <div className='signup-bg'>
                    <form className='signup-section' onSubmit={addData}>
                        <h1 className='signup-heading'>Sign In</h1>
                        <div className='input-section'>
                            <label htmlFor='email' className='label-text'>Email</label>
                            <input type='email' className='input-element' id='email' placeholder='Enter your email' onChange={getData} name='email'/>
                        </div>
                        <div className='input-section'>
                            <label htmlFor='password' className='label-text'>Password</label>
                            <input type='password' className='input-element' id='password' placeholder='Enter your password' onChange={getData} name='password'/>
                        </div>
                        
                        <button type='submit' className='submit-button'>Submit</button>
                        <p className='signup-text'>New User <Link to='/'>Sign Up</Link></p>
                    </form>
                    <img src='https://res.cloudinary.com/dwlbneeh4/image/upload/v1696772996/loginpic_ixihst.jpg' className='signup-image' alt='signup'/>
                </div>
    )

}
export default LoginPage