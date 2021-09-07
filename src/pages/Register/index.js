import React, {useState} from 'react';
import './register.scss';
import { bgRegister } from '../../assets';
import { Input, Button, Select, Break, Header, Footer } from '../../components';
import { useHistory } from 'react-router';

const Register = () => {    
    const history = useHistory();
    const [fn, setFN] = useState('');
    const [ln, setLN] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gd, setGD] = useState('');
    const [province, setProvince] = useState('');
    const [city, setCity] = useState('');
    const [cities, setCities] = useState([]);
    const provinces =[{   
        key: 0, 
        value: "Jawa Barat", 
        city: [
            {
                key: 11, 
                value: "Kab Bandung"
            },
            {
                key: 12, 
                value: "Kota Bandung"
            }, 
            {
                key: 13, 
                value: "Kab Bogor"
            }, 
            {
                key: 14, 
                value: "Kota Bogor"
            }, 
            {
                key: 15, 
                value: "Kota Depok"
            }
        ]
    },{   
        key: 1, 
        value: "DKI Jakarta", 
        city: [
            {
                key: 21, 
                value: "Jakarta Barat"
            },
            {
                key: 22, 
                value: "Jakarta Pusat"
            }, 
            {
                key: 23, 
                value: "Jakarta Selatan"
            }, 
            {
                key: 24, 
                value: "Jakarta Timur"
            }, 
            {
                key: 25, 
                value: "Jakarta Utara"
            }
        ]
    }];
    function handleProvinceSelect(e) {
        const provinceSelect = e.target.value;
        const citiesSel = provinceSelect !== "" ? provinces[provinceSelect].city : [];
        setProvince(provinceSelect);        
        setCities(citiesSel);
        setCity("");
      }
    const handleCitySelect = (e) => {
        console.log("Selected city", e.target.value);
        const citiesSel = e.target.value;
        setCity(citiesSel);      
    }
    const onSubmit = () => {    
            let errors = {};
            let formIsValid = true;
            let act = "";
        
            if(!fn||!ln||!email||!password){
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
                alert("Register Success");
                window.location.assign('login');
            }
            
    }

    return (
        <div className="main-container">
            <Header title="Have Account? Sign In" url={() => history.push('login')} />
            <div className="left-container"><img src={bgRegister} alt="Register" /><div className="img-overlay"></div></div>
            <div className="right-container">
                <h1>Register</h1>
                <div className="form">
                    <div className="col-6">
                        <Input label="First Name" placeholder="First Name" value={fn} onChange={(e) => setFN(e.target.value)} />
                    </div>
                    <div className="col-6">
                        <Input label="Last Name" placeholder="Last Name" value={ln} onChange={(e) => setLN(e.target.value)} />
                    </div>      
                    <div className="col-12">
                        <Input label="Email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>     
                    <div className="col-12">
                        <Input label="Password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>   
                    <div className="col-12">
                        <Select label="Jenis Kelamin" array={[{key: 1, value: "Pria"},{key: 2, value: "Wanita"}]} placeholder="Jenis Kelamin" value={gd} onChange={(e) => setGD(e.target.value)} />
                    </div> 
                    <div className="col-12">
                        <Select label="Provinsi" array={provinces} placeholder="Provinsi" value={province} onChange = {e => handleProvinceSelect(e)} />
                    </div>
                    <div className="col-12">
                        <Select label="Kota" array={cities} placeholder="Kota" value={city} onChange={e => handleCitySelect(e)} /> 
                    </div>
                    <Break height={100} />
                    <div className="col-12">
                        <Button label="Register" onClick={onSubmit} />
                    </div>    
                    <Footer />                  
                </div>
            </div>
        </div>
    )
}

export default Register;
