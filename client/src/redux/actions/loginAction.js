import axios from 'axios'

import { LOGIN_USER } from '../types/userTypes'


export const loginUserAction = (responce) => ({
  type: LOGIN_USER,
  payload: responce,
})

export const loginUser = (loginForm) => async (dispatch) => {
  const userFromBack = await axios.post('http://localhost:3001/user/login', {loginForm})
  const responce = userFromBack.data
  dispatch(loginUserAction(responce))
}
