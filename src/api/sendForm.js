import request from "../utils/request"

export const sendForm = (data) => {
  return request({
    method: 'POST',
    url: '/resume',
    data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const uploadFile = (data) => {
  return request({
    method: "POST",
    url: "/uploadFile"
  })
}