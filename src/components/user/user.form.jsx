
import { Input, notification, Modal } from 'antd';
import { Button, Flex } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { createUserAPI } from '../../services/api.service';


const UserForm = (props) => {

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const {loadUser} = props

    const handleSubmitButton = async () => {

        const res = await createUserAPI(fullName, email, password, phoneNumber)
        
        if(res.data){
            notification.success({
                message: "Create user",
                description: "Successful "
            })
            resetAndCloseModal()
            await loadUser()
        }else{
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }    
    }

  
    const [isModalOpen, setIsModalOpen] = useState(false);

    const resetAndCloseModal = () => {
        setIsModalOpen(false)
        setFullName("")
        setPassword("")
        setEmail("")
        setPhoneNumber("")
    }

    return(
        <div className="user-form" style={{margin: "20px 0"}}>
                
                <div style={{display: "flex" , justifyContent : "space-between"}}>
                        <h3>Table Users</h3>
                        <Button type='primary' onClick={ () => {setIsModalOpen(true)}}> Create User </Button> 
                    </div>

                <Modal title="Create User" 
                open={isModalOpen} 
                onOk={() => {handleSubmitButton()} }  
                onCancel={() => {resetAndCloseModal()}}
                maskClosable = {false}
                okText= {"CREATE"}
                >
                    <div style={{display: "flex", gap: "10px", flexDirection : "column"}}>
                    <div>
                        <span>FullName</span>
                        <Input 
                        value={fullName}
                        onChange={(event) => {setFullName(event.target.value)}}
                        />
                    </div>
                    <div>
                        <span>Email</span>
                        <Input
                            value = {email}
                            onChange={(event) => {setEmail(event.target.value)}}
                        />
                    </div>
                    <div>
                        <span>Password</span>
                        <Input.Password 
                             value = {password}
                             onChange={(event) => {setPassword(event.target.value)}}
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
        </div>
    )
}

export default UserForm;