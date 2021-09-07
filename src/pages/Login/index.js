import React, {useState} from 'react';
import { bgLogin } from '../../assets';
import { Input, Button, Break, Header, Footer } from '../../components';
import { useHistory } from 'react-router';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setErrors] = useState('');
    const history = useHistory();
    const onSubmit = () => {
        console.log('email',email)
        console.log('password',password)
    
            let errors = {};
            let formIsValid = true;
        
            //Name
            if(!email||!password){
              formIsValid = false;
              errors["name"] = "Cannot be empty";
            }            
               
       
     
              let lastAtPos = email.lastIndexOf('@');
              let lastDotPos = email.lastIndexOf('.');
        
              if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') == -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["name"] = "Email is not valid";
              }
   
            if(formIsValid == false) { 
                alert(errors.name);
            } else {
                alert("Login Success");
                window.location.assign('news');
            }        
    }
    
    return (
        <div className="main-container">
            <Header title="Don't Have Account? Sign Up" url={() => history.push('register')} />
            <div className="left-container"><img src={bgLogin} alt="Login" /><div className="img-overlay"></div></div>
            <div className="right-container">
                <h1>Login</h1>
                <div className="form">    
                    <div className="col-12">
                        <Input label="Email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>     
                    <div className="col-12">
                        <Input label="Password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </div>   
                    <Break height={150} />
                    <div className="col-12">
                        <Button label="Login" onClick={onSubmit} />
                    </div>  
                    <Footer />                      
                </div>
            </div>
        </div>
    )
}

export default Login;
