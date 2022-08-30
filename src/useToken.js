import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
const tokenString = sessionStorage.getItem('access_token');
  const adminToken = JSON.parse(tokenString);
  return adminToken?.access_token
}
const [token, setToken] = useState(getToken());

const saveToken = adminToken => {
sessionStorage.setItem('access_token', JSON.stringify(adminToken));
setToken(adminToken.access_token);
}

return {
    setToken: saveToken,
    token
  }
  
}