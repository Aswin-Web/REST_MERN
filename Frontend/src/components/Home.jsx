import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import {Button} from "react-bootstrap"
import "../App.css"
import {Link,useNavigate} from "react-router-dom"
function Home() {
    const navigate=useNavigate()
  let [data, setdata] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000").then((x) => {
      setdata(x.data);
    });
  }, []);
  const deleteUser=async (id)=>{
    
     const res=await axios.delete(`http://localhost:5000/delete/${id}`)
     axios.get("http://localhost:5000").then((x) => {
      setdata(x.data);
    });
  }
  

  return( <div>
    <div className="addUser"><h3 >Click Here To Add User</h3>
    <Link to="/add"><Button variant="success">Add User</Button></Link></div>
    <Table className="tables" striped bordered>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
                {data.map((value,index)=>{
                    return <tr>
                    <td key={value.id}>{value.name}</td>
                    <td key={value.id}>{value.email}</td>
                    <td key={value.id}>{value.phone}</td>
                    <td className="buttons">
                      <Link to={`/add/${value._id}`}><Button variant="success">Edit</Button></Link>
                    <Button variant="danger" onClick={()=>{deleteUser(value._id)}}>Delete</Button></td>
                  </tr>
                })}
            </tbody>
        </Table>    
  </div>)
 
}  

export default Home