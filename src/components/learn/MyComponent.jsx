import './style.css'
//fragment
const  MyComponent = () => {

    //const name = " Huy ne";

    const name = [1, 2, 3]
    // const name = {
    //     name: "Huy Nguyen",
    //     age: 25
    // }
    return(
    <>
      <div> {JSON.stringify(name)} Huy Nguyen update </div>
      <div>{console.log("Huy")}</div>
      <div className="child"> child</div>
    </>
    );
  }


export default MyComponent;