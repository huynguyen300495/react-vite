import axios from "./axios.customize";

const createUserAPI = (fullName, email, password, phoneNumber) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phoneNumber
    }
    return axios.post(URL_BACKEND, data)

    
}

const updateUserAPI = (_id, fullName, phoneNumber) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        _id:_id,
        fullName: fullName,
        phone: phoneNumber
    }
    return axios.put(URL_BACKEND, data)

}

const fetchAllUserAPI = (current, pageSize) => {
    const URL_BACKEND = `/api/v1/user?current=${current}&pageSize=${pageSize}`;
    return axios.get(URL_BACKEND)
}

const deleteUserAPI = (_id) => {
    const URL_BACKEND = `/api/v1/user/${_id}`;
    return axios.delete(URL_BACKEND)
}

const handleUploadFile = (file, folder) => {

    const URL_BACKEND = "/api/v1/file/upload";
    let config = {
        headers : {
            "upload-type" : folder,
            "Content-Type" : "multipart/form-data"

        }
    }

    const bodyFormData = new FormData();
    bodyFormData.append("fileImg", file )

    return axios.post (URL_BACKEND, bodyFormData, config)
}

const updateUserAvatarAPI = (avatar,_id,fullName, phone ) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        avatar: avatar,
        _id:_id,
        fullName: fullName,
        phone: phone
        
    }
    return axios.put(URL_BACKEND, data)

}


const registerUserAPI = (fullName, email, password, phoneNumber) => {
    const URL_BACKEND = "/api/v1/user/register";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phoneNumber
    }
    return axios.post(URL_BACKEND, data)
}
   
const loginAPI = (username, password) => {
    const URL_BACKEND = "/api/v1/auth/login";
    const data = {
        username: username,
        password: password,
        delay: 2000
    }
    return axios.post(URL_BACKEND, data)

}

const getAccountAPI = () => {
    const URL_BACKEND = "/api/v1/auth/account";
    
    return axios.get(URL_BACKEND)

}
export {createUserAPI, updateUserAPI, fetchAllUserAPI, deleteUserAPI, handleUploadFile, updateUserAvatarAPI,registerUserAPI, loginAPI, getAccountAPI};