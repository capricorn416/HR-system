import request from "../utils/request"

export const getUploadToken = async ()=>{
    return (await request.get('/uploadToken')).data
}