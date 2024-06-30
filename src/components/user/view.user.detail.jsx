
import {  Button, Drawer } from 'antd';

const ViewUserDetail = (props) => {

    const {openDetail, setOpenDetail, dataDetail, setDataDetail} = props;


    // useEffect(()=>{

    //     console.log(dataDetail)
    //     if (dataDetail){
    //         setId(dataDetail._id)
    //         setFullName(dataDetail.fullName)
    //         setEmail(dataDetail.email)
    //         setPhoneNumber(dataDetail.phone)
    //     }
    // },[dataDetail])
    
   
      const onClose = () => {
        setOpenDetail(false);
        setDataDetail(null)
      };
    return(
        
    <Drawer title="Basic Drawer" onClose={onClose} open={openDetail} width={"40vw"}>
        {dataDetail?
        <>
            <p>ID: {dataDetail._id}</p>
            <br />
            <p>Full Name: {dataDetail.fullName}</p>
            <br />
            <p>Email: {dataDetail.email}</p>
            <br />
            <p>Phone: {dataDetail.phone}</p>
            <br />
            <p>Avatar: </p>
            <div>
                <img 
                height={100} width={150}
                src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`}/>
            </div>
            <div>
                <label htmlFor="btnUpload" style={{
                    display:"block",
                    width:"fit-content",
                    marginTop: "15px",
                    padding : "5px 10px",
                    background : "orange",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}>
                    Upload Avatar
                </label>
                <input type="file"hidden id='btnUpload' />
            </div>
        </>
            :
            <>
            <p> No data</p>
            </>
    
        }
    </Drawer>
    )
}

export default ViewUserDetail;