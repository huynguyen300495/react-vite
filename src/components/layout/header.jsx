import { Link, useNavigate } from "react-router-dom";
import {Menu, message} from 'antd'
import { HomeOutlined, UsergroupAddOutlined, AuditOutlined, LoginOutlined, AliwangwangOutlined } from '@ant-design/icons';
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { logoutAPI } from "../../services/api.service";

const Header = () => {

    const [current, setCurrent] = useState('home');
    const {user, setUser} = useContext(AuthContext)
    const navigate = useNavigate()

    console.log("data from useContext", user)

    const onClick = (e) => {
      // console.log('click ', e);
      setCurrent(e.key);
    };

    const handleLogOut =  async () => {
      const res = await logoutAPI()
      if(res.data){
        localStorage.removeItem("access_token")
        setUser({
          email: "",
          phone: "",
          fullName: "",
          role: "",
          avatar: "",
          id: "",
      })
        message.success("Logout successfully!")
        navigate("/")
      }
    }

    const items = [
        {
          label: <Link to={"/"}>Home</Link>,
          key: 'home',
          icon: <HomeOutlined />,
        },
        {
          label: <Link to={"/users"}>Users</Link>,
          key: 'user',
          icon: <UsergroupAddOutlined />,
          
        },
        {
          label: <Link to={"/books"}>Book</Link>,
          key: 'book',
          icon: <AuditOutlined />,
        },

        ...(!user.id ?  [{label: <Link to={"/login"}>Login</Link>,
          key: 'login',
          icon: <LoginOutlined />,}] : []
          
        ),

        ...(user.id ?  [
          {
            label: `Welcome ${user.fullName}`,
            key: 'setting',
            icon: <AliwangwangOutlined />,
            children: [
              {
                label: <span onClick={() => {handleLogOut()}}>Log out</span>,
                ket: 'logout',
              }
            ]
          }
        ] : []
          
        ),
       
       
        
      ];


    return(
        // <ul>
        // <li><NavLink to="/">Home</NavLink></li>
        // <li><NavLink to="/users">Users</NavLink></li>
        // <li><NavLink to="/products">Books</NavLink></li>
        // </ul>
        <> 
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </>
    )
}

export default Header;