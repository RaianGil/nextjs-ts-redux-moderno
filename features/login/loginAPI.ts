import axios from 'axios';
export async function fetchLogin(parms: {username:string, password:string}): Promise<{ data: any }> {
  const response = await fetch('http://localhost:4000/collab/loginUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(parms),
  })
  const result = await response.json()

  return result
}

export async function axiosLogin(parms:{username:string, password:string}) {
  return axios.post('http://localhost:4000/collab/loginUser', parms)
}