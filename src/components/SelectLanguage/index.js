import { json } from 'react-router-dom'
import './index.css'
import {Component} from 'react'
class SelectLanguage extends Component{

    state = {languageInput : ''}

    onChangeLanguage = event => {
        this.setState({languageInput:event.target.value})
    }

    componentDidMount(){
        this.getJobData()
    }
    getJobData = async() => {

        const {languageInput } = this.state
        const jwtToken = 'eaf402a46fbacb593468235ad6b9464ae83d1dbab08c8d1164fc95e9dfd8457a'
        const url = `https://www.themuse.com/api/public/jobs`
        const options = {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
              'Content-Type' : "application/json"
             
            },
            method: 'GET',
          }
          const response = await fetch(url, options)
          console.log(response)
        
    }

    render(){
        const {languageInput} = this.state
        return(
            
    <div className="language-container">
    <img src='https://res.cloudinary.com/dwlbneeh4/image/upload/v1696792666/programming_banner_qsoutf.png' alt='programmingImage' className='program-img'/>
    <h1>Find a Programming Job</h1>
    <p>Enter the programming language you're looking for a job in:</p>
    <form>
        <input type="text"  value={languageInput} onChange={this.onChangeLanguage} placeholder="e.g., Python, Java, JavaScript" className='language-input'/>
        <br/>
        <button type="button" className='language-submit-btn' onClick={this.getJobData}>Search</button>
    </form>
</div>
        )
    }
} 
export default SelectLanguage
