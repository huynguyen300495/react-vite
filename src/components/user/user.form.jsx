
import { Input } from 'antd';
import { Button, Flex } from 'antd';
import { useState } from 'react';

const UserForm = () => {

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const handleCreateButton = () => {
        console.log("check data", {fullName, email, password, phoneNumber})
    }
    return(
        <div className="user-form" style={{margin: "20px 0"}}>
                <div style={{display: "flex", gap: "10px", flexDirection : "column"}}>
                    <div>
                        <span>FullName</span>
                        <Input 
                        //value={fullName}
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

                    <div>
                        <Button type='primary' onClick={handleCreateButton}> Create User </Button> 
                    </div>
                </div>
        </div>
    )
}

export default UserForm;