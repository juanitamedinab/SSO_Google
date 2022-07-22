import axios from 'axios';

const googLogin=(accesstoken)=>{
    axios
        .post(`http://127.0.0.1:8000/auth/convert-token`, {
            token: accesstoken,
            backend: 'google',
            grant_type: 'convert_token',
            client_id: 'N52Ide3KadF94WtRnBeOMj6PpLxFm8mtVpOJTfxq', 
            client_secret: 'sgGWbxDawGhZq7uQW1bN7XRrFVlItAGnVgBPmwfMRjbR22PH62IYbmrZUyPit3LRAxnGT6iTc6IXehAbG40EeLySrfv4WCWpy8V5g7wEOHWA5ENoQ3Efl5RUP31YgYS0'
        })
        .then((res) => {
            localStorage.setItem('access_token', res.data.access_token);
            localStorage.setItem('refresh_token', res.data.refresh_token);
        });
}

export default googLogin;