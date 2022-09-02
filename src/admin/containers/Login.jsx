import React, {useState} from 'react'
import PropTypes from 'prop-types';

async function loginUser(credentials) {
 return fetch('https://sandwich-backend.herokuapp.com/api/v1/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}
const Login = ({setToken}) => {
   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
   const handleSubmit = async e => {
     e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    setToken(token);
  
  }


  return (
    <>
    <div className='landingimgbgmb h-[650px]'>
        <div className="flex justify-center items-center">
            <div className="mt-[110px] w-[300px] h-[350px] shadow-md bg-white">
            <h1 className="text-[35px] py-[10px] font-[600] text-black text-center">Log in</h1>
            <div className="flex flex-col  p-3">
            <form onSubmit={handleSubmit}>
             <div className="py-[10px]">
               <label htmlFor="email" className='text-[19px] font-[500]'>Email</label>
           <input type="email" name="email" id="email"  autoComplete="off" value={email} required onChange={e => setEmail(e.target.value)} className='w-[100%] px-[10px] py-[5px] border-[1px] border-solid outline-orange rounded-[5px]' placeholder='Enter email address' />
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