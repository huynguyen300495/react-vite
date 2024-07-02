import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {  Table, notification } from 'antd';
import UpdateUserModal from './update.user.modal';
import { useEffect, useState } from 'react';
import ViewUserDetail from './view.user.detail';
import {  Popconfirm } from 'antd';
import { deleteUserAPI } from '../../services/api.service';


  
const UserTable = (props) => {

  const {dataUsers,loadUser} = props
  
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [dataDetail, setDataDetail] = useState(null)




  const [dataUpdate, setDataUpdate] = useState(null)

  useEffect(()=>{
    loadUser()
  }, [])

  const handleDeleteUser = async (id) => {
    const res = await deleteUserAPI(id)
    if(res.data){
      notification.success({
        message:"Delete user",
        description: "Successfully"
      })
      await loadUser();
      
    } else {
      notification.error({
        message: "Error delete User",
        description : JSON.stringify(res.message)
      })
    }
  }

    const columns = [
        {
          title: 'ID',
          dataIndex: '_id',
          render: (_, record) => (
            <>
              <a href = "#" onClick={()=>{
                setOpenDetail(true)
                setDataDetail(record)
              }}> {record._id}</a>
            </>
          ),
        },
        {
          title: 'Full Name',
          dataIndex: 'fullName',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <div style={{display: "flex", gap: "20px"}}>
          
              <EditOutlined 
                onClick={() => {setIsModalUpdateOpen(true)
                  setDataUpdate(record)
                }}
                style={{cursor:"pointer", color:"orange"}}/>

              <Popconfirm
                title="Delete the task"
                description="Are you sure to delete this task?"
                onConfirm={ () => {
                  handleDeleteUser(record._id)
                }}
                okText="Yes"
                cancelText="No"
              >
                  <DeleteOutlined style={{cursor:"pointer", color:"red"}}
          
                  />
              </Popconfirm>
            </div>
          ),
        },
      ];
     
    
    return(
      <>
        <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
        <UpdateUserModal 
          isModalUpdateOpen = {isModalUpdateOpen}
          setIsModalUpdateOpen = {setIsModalUpdateOpen}
          dataUpdate = {dataUpdate}
          setDataUpdate = {setDataUpdate}
          loadUser={loadUser}
        />
        <ViewUserDetail 
          openDetail = {openDetail}
          setOpenDetail = {setOpenDetail}
          dataDetail = {dataDetail}
          setDataDetail = {setDataDetail}
          loadUser={loadUser}
        />
      </>
    )
}

export default UserTable;