import axios from 'axios'
const BASE_URL = process.env.API
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dkd5jyxby/image/upload'

const createData = async (endpoint, body) => {
  try {
    await axios.post(`${BASE_URL}/${endpoint}`, body)
  } catch (error) {
    console.log(error)
  }
}

const readData = async (endpoint, id = '') => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const updateData = async (endpoint, id, body) => {
  try {
    await axios.patch(`${BASE_URL}/${endpoint}/${id}`, body)
  } catch (error) {
    console.log(error)
  }
}

const deleteData = async (endpoint, id) => {
  try {
    await axios.delete(`${BASE_URL}/${endpoint}/${id}`)
  } catch (error) {
    console.log(error)
  }
}

const saveImage = async file => {
  const body = {
    file,
    api_key: 357824561481388,
    upload_preset: 't4dskobq'
  }
  const headers = {
    "Content-Type": "multipart/form-data",
  }
  const response = await axios.post(CLOUDINARY_URL, body, { headers })
  return response.data.url
}

export { createData, readData, updateData, deleteData, saveImage }