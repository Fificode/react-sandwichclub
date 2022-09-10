import React, {useState} from 'react'

const Subscribe = () => {
  const [email, setEmail] = useState("");
 const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
  e.preventDefault();
    try {
      const response = await fetch('https://sandwich-backend.herokuapp.com/api/v1/create/subscribers', {
       method: "post",
         headers: {
         
          'Content-type': 'application/json',
        },
        body: JSON.stringify({email}),
        }
        )
       
//  console.log(response);
      setEmail("");
      const json = await response.json(); 
      console.log("New email added!")
      console.log(json.success);
      if (json.success === true) {
         setStatus("SUCCESS");  
          alert("Thank you for Subscribing!")
        return
      }
       else if(json.success === false){
alert("Email already exists, input another email address");
      }
    } catch (err) {
      setStatus("ERROR");
      console.log(err.response);
     }

  }
  return (
    <div className='flex flex-col justify-center items-center bg-grey p-[20px] mb-[30px]'>
        <div className="m-[20px]">
        <h1 className="text-[40px] leading-[60px]  md:text-[48px] font-[600] tracking-[0.0015em] md:leading-[72px] text-black text-center">Subscribe To Our Newsletter</h1>
        <p className="text-[20px] leading-[30px]  md:text-[24px] font-[500] tracking-[0.0015em] md:leading-[36px] text-black text-center">Be updated about news, deals and offers, coupons and whatnot.<br/>
Who knows? You may get lucky and get free sandwiches for a month!</p>
</div>
 {status === "SUCCESS" && (
          <p className='text-[20px] leading-[30px]  md:text-[24px] font-[600] tracking-[0.0015em] md:leading-[36px] text-green-cyan text-center m-3'>Thank you for Subscribing!</p>
      )}
      {status === "ERROR" && (
        <div className="flex flex-col items-center m-3"> <p className='text-[20px] leading-[30px]  md:text-[24px] font-[500] tracking-[0.0015em] md:leading-[36px] text-red text-center'>Oops, something went wrong...</p>
          <p className='text-[20px] leading-[30px]  md:text-[24px] font-[500] tracking-[0.0015em] md:leading-[36px] text-red text-center'>
            Please, <button className='text-underline' onClick={() => setStatus(null)}>click here</button> to try again.
          </p></div>
      )}
{status === null && (<form onSubmit={handleSubmit}>
<div className="flex flex-row m-[10px]">
<input type="email" placeholder='Enter your email address' autoComplete="off" value={email} required onChange={e => setEmail(e.target.value)}  aria-label="Your email address"
        name="email_address" className='lg:w-[800px] md:w-[600px] h-[50px] w-[200px] rounded-[5px] bg-white outline-orange font-[600] text-[18px] leading-[29px] tracking-[0.0015em] text-black px-2 mx-[10px]' />
<button className='px-[12px] py-[7px] bg-orange rounded-[5px] text-white font-[500] leading-[29px] tracking-[0.0015em] outline-none'>Subscribe</button>
</div>
</form>)}
    </div>
  )
}

export default Subscribe