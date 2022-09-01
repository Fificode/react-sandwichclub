import React, {useState, useRef, useEffect} from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';

let token = "";
const Login = ({setToken}) => {
  
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => 
  {
    emailRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg(' ');
  }, [email, password])

   const handleSubmit = (e) => {
     e.preventDefault();
    
      axios.post('https://sandwich-backend.herokuapp.com/api/v1/login', {email, password})
      .then(
        function(response){
          // console.log(response)
          token = response.data.access_token
          // console.log(token)
        })
     setEmail('');
     setPassword('');
     setSuccess(true);
    setToken(token);

  //   .catch((err) =>
  // if(!err?.response){
  //   setErrMsg('No Server Response');
  // } else if(err.response?.status === 400){
  //   setErrMsg('Missing Username or Password');
  // } else if (err.response?.status === 401){
  //   setErrMsg('Unauthorized');
  // } else {
  //   setErrMsg('Login Failed');
  // }
  // errRef.current.focus();
  //   )

  }


  return (
    <>
    <div className='landingimgbgmb h-[500px]'>
        <div className="flex justify-center items-center">
            <div className="mt-[110px] w-[300px] h-[350px] shadow-md bg-white">
              <p ref={errRef} className={errMsg ? "text-left text-red text-[22px] font-[600]" : "hidden"}>{errMsg}</p>
            <h1 className="text-[35px] py-[10px] font-[600] text-black text-center">Log in</h1>
            <div className="flex flex-col  p-3">
            <form onSubmit={handleSubmit}>
             <div className="py-[10px]">
               <label htmlFor="email" className='text-[19px] font-[500]'>Email</label>
           <input type="email" name="email" id="email" ref={emailRef} autoComplete="off" value={email} required onChange={e => setEmail(e.target.value)} className='w-[100%] px-[10px] py-[5px] border-[1px] border-solid outline-orange rounded-[5px]' placeholder='Enter email address' />
           </div>
           <div className="py-[10px]">
           <label htmlFor="password" className='text-[19px] font-[500]'>Password</label>
            <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} value={password} required className='w-[100%] px-[10px] py-[5px] border-[1px] border-solid outline-orange rounded-[5px]' placeholder='Enter password' />
            </div>
            <div className="py-[10px] flex justify-center">
              <button type="submit" className='w-[100%] px-[10px] py-[5px] text-white bg-orange rounded-[5px] text-center text-[17px] font-[500]'>Log in</button>
            </div>
           </form>
            </div>
            </div>
        </div>
    </div>
    </>
  )

  }
Login.propTypes = {setToken: PropTypes.func.isRequired}
export default Login