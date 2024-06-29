import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';

  
const UserTable = () => {

    const [dataUsers, setDataUsers] = useState([])
    useEffect(() => {
      loadUser()
    }, [])

    const columns = [
        {
          title: 'ID',
          dataIndex: '_id',
        },
        {
          title: 'Full Name',
          dataIndex: 'fullName',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          
        },
       
      ];
     

      const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUsers(res.data)
        
      }

      console.log("00000")
    return(
        <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
    )
}

export default UserTable;