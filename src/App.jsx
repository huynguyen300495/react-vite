import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { getAccountAPI } from './services/api.service';
import { AuthContext } from './components/context/auth.context';
import {Spin} from 'antd';


// const Parent = (props) => {
//   console.log("check props of parent", props)
//   return(
//     <>
//     <div>"ParentPage"</div>
//     {props.children}
//     </>
    
//   ) 
// }

// const ChildrenCom = () => {
//   return(
//     <div>"childrenPage"</div>
//   ) 
// }

const App = () => {

  const {setUser, isAppLoading, setIsAppLoading} = useContext(AuthContext)
  
  useEffect(() => {
    fetchUserInfo();
  }, [])
  
  const fetchUserInfo = async () => {
    const res = await getAccountAPI()
    if (res.data){
      setUser(res.data.user)
    }

    setIsAppLoading(false)
  }

  return (
    <>
      {/* <Parent >
          < ChildrenCom />
      </Parent> */}

      {isAppLoading === true ? 
      <div style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}>
        <Spin />
      </div>
        
      
      :

      <>
      <Header />
      <Outlet />
      <Footer />
      </>
      }
      
    </>
  )
}

export default App
