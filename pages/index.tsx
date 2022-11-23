import React from "react"
import { setPassword, setUsername, selectUsername, selectPassword, loginAPI, selectErr } from "../features/login/loginSlice"
import { useAppDispatch, useAppSelector } from "../hooks"


const Index = () => {
  const dispatch = useAppDispatch()
  const username = useAppSelector(selectUsername)
  const password = useAppSelector(selectPassword)
  const err = useAppSelector(selectErr)
  return (
    <div>
      <h1>Login</h1>
      <label htmlFor="">{username}</label><br />
      <label>Usuario</label>
      <input onChange={e => dispatch(setUsername(e.target.value))}/><br />
      <label>Password</label>
      <input onChange={e => dispatch(setPassword(e.target.value))}/><br />
      <button onClick={() => dispatch(loginAPI({username, password}))}>Enviar</button><br />
      { err ? <label>usuario contraseña invalida</label> : undefined }
    </div>
  )
}

export default Index