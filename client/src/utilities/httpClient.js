import axios from 'axios'
import jwtDecode from 'jwt-decode'


const httpClient = axios.create()

httpClient.setToken = function (token) {
  localStorage.setItem('token', token)
  return token
}

httpClient.getToken = function () {
  return localStorage.getItem('token')
}

httpClient.getCurrentUser = function () {
  const token = this.getToken() // Fetch token from local storage
  if (token) return jwtDecode(token) // If token exists, return the decoded user object.
  return null // Otherwise, return null.
}

httpClient.authenticate = async function (credentials, url) {
  try {
    let res = await this({ method: 'post', url, data: credentials })

    const token = res.data.token

    if (token) {
      this.defaults.headers.common.token = this.setToken(token)
      return jwtDecode(token)
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

httpClient.updateUser = async function (credentials, url) {
  try {
    let res = await this({ method: 'patch', url, data: credentials })
    const { token } = res.data.payload

    if (token) {
      this.defaults.headers.common.token = this.setToken(token)
      return jwtDecode(token)
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

httpClient.deleteUser = async function (credentials, url) {
  try {
    let res = await this({ method: 'delete', url, data: credentials })
    const user = res.data.payload

    if (user) {
      return httpClient.logout()
    }
  } catch (err) {
    console.log(err)
  }
}

httpClient.logout = function () {
  localStorage.removeItem('token')
  delete this.defaults.headers.common.token
  return true
}
httpClient.defaults.headers.common.token = httpClient.getToken()
export default httpClient