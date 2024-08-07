import { useContext } from "react";
import { AuthContext } from "../components/context/auth.context";
import { Link } from "react-router-dom";
import { Button, Result } from "antd";

const PrivateRoute = (props) => {
    const {user} = useContext(AuthContext)

    if(user && user.id){
        return(
            <>
                {props.children}
            </>
        )
    }
    // return (<Navigate to="/login" />)
    return(<Result
        status="403"
        title="Unauthorize"
        subTitle={"You need to login to access this page!"}
        extra={<Button type="primary"><Link to="/login"><span>Go to Login Page</span></Link></Button>}
/>)
}

export default PrivateRoute;