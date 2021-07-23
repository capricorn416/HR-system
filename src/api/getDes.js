import request from "../utils/request"

export const getGroupDesc = () => {
  return request({
    method: 'GET',
    url: '/groupDesc'
  })
}

export const getProductDesc = () => {
  return request({
    method:'GET',
    url: '/productDesc'
  })
}