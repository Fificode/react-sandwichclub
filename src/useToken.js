import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
const tokenString = sessionStorage.getItem('token');
  const adminToken = JSON.parse(tokenString);
  return adminToken?.token
}
const [token, setToken] = useState(getToken());

const saveToken = adminToken => {
sessionStorage.setItem('token', JSON.stringify(adminToken));
setToken(adminToken.token);
}

return {
    setToken: saveToken,
    token
  }
  
}