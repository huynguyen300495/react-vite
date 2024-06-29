import { useEffect, useState } from "react"
import { Input, notification, Modal } from 'antd';
import { Button, Flex } from 'antd';
import { createUserAPI, updateUserAPI } from "../../services/api.service";

const UpdateUserModal =  (props) => {
    const [id, setId] = useState("")
    const [fullName, setFullName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    
    const {isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, loadUser} = props;

    useEffect(() => {
        console.log(dataUpdate)
        if (dataUpdate){
            setId(dataUpdate._id)
            setFullName(dataUpdate.fullName)
            setPhoneNumber(dataUpdate.phone)
        }

    }, [dataUpdate])
    const handleSubmitButton = async () => {

        const res = await updateUserAPI(id, fullName, phoneNumber)
        
        if(res.data){
            notification.success({
                message: "Update user",
                description: "Successful "
            })
            resetAndCloseModal()
            await loadUser()
        }else{
            notification.error({
                message: "Error update user",
                description: JSON.stringify(res.message)
            })
        }    
    }


    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false)
        setFullName("")
        setId("")
        setPhoneNumber("")
        setDataUpdate(null)
    }


    
    return(
        
        <Modal title="Update User" 
        open={isModalUpdateOpen} 
        onOk={() => {handleSubmitButton()} }  
        onCancel={() => {resetAndCloseModal()}}
        maskClosable = {false}
        okText= {"Save"}
        >
            <div style={{display: "flex", gap: "10px", flexDirection : "column"}}>
            
            <div>
                <span>ID</span>
                <Input
                    value = {id}
                    disabled
                />
            </div>
            <div>
                <span>FullName</span>
                <Input 
                value={fullName}
                onChange={(event) => {setFullName(event.target.value)}}
                />
            </div>

            <div>
                <span>Phone number</span>
                <Input 
                
                    value = {phoneNumber}
                    onChange={(event) => {setPhoneNumber(event.target.value)}}
                />
            </div>
        </div>
        </Modal>
    )
}

export default UpdateUserModal;

