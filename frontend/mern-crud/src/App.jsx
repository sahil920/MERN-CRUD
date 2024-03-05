import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [clients, setClients] = useState([])
  const [fields, setFields] = useState({
    name:"",
    lastName:"",
    email:"",
    phoneNumber:"",
    project:""
  })
  const handleChange=(name, e)=>{
    const data = e.target.value
    console.log("name:",name, data )

    setFields((p)=>({...p,  [name]:data}))
  }
  useEffect(()=>{console.log("fields", fields)}, [fields])

  useEffect(()=>{
     const clients=  axios.get("http://localhost:5004/client/get-clients")
  setClients(clients)
  
  }, [])
  const onSubmit = ()=>{
      axios.post("http://localhost:5004/client/create-client", fields)
  }

  return (
  <>
  <div>
    {/* table start   */}
  <table >
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile No. </th>
      <th scope="col">Project</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    
      {clients.length>0 ?  ( clients?.map((item,index )=>
      <>
      <td key={index}>{item?.name}</td>
      <td>{item?.lastname}</td>
      <td>{item?.email}</td>
      <td>{item?.phoneNumber}</td>
      <td>{item?.project}</td>
      </>
      ))
   :<>No Clients Found</>}
    
    </tr>

  </tbody>
</table>
{/* table end  */}

{/* form start */}
<form>
  <div >
    <label >Name</label>
    <input type="email"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>handleChange("name", e)}/>
   
  </div>

  <div >
    <label>Last Name</label>
    <input type="password"  id="exampleInputPassword1" placeholder="Password" onChange={(e)=>handleChange("lastName", e)}/>
  </div>
  <div >
    <label >Email</label>
    <input type="password"  id="exampleInputPassword1" placeholder="Password" onChange={(e)=>handleChange("email", e)}/>
  </div>
  <div >
    <label >Mobile Number</label>
    <input type="password"  id="exampleInputPassword1" placeholder="Password" onChange={(e)=>handleChange("phoneNumber", e)}/>
  </div>
  <div >
    <label >Project</label>
    <input type="password"  id="exampleInputPassword1" placeholder="Password"onChange={(e)=>handleChange("project", e)}/>
  </div>

  <button type="submit" onClick={onSubmit} >Submit</button>
</form>
{/* form end */}



</div>
  </>
  )
}

export default App
