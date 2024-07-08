import { Link } from "react-router-dom";
import {Menu} from 'antd'
import { HomeOutlined, UsergroupAddOutlined, AuditOutlined } from '@ant-design/icons';
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";

const Header = () => {

    const [current, setCurrent] = useState('home');
    const data = useContext(AuthContext)

    console.log("data from useContext", data)

    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };

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