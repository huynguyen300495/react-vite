import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';
import { Children } from 'react';


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

  return (
    <>
      {/* <Parent >
          < ChildrenCom />
      </Parent> */}
      <Header />
      
      <todoApp />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
