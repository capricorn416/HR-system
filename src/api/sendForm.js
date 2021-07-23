import request from "../utils/request"

export const sendForm = (data) => {
  return request({
    method: 'POST',
    url: '/resume',
    data
  })
}