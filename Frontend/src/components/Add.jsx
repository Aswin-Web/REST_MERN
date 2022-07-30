import React,{useState,useEffect} from "react";
import { Form, Button } from "react-bootstrap";
import "../App.css";


import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";



export default function Add() {
  const id=useParams()
  console.log(id.id)
  let navigate = useNavigate();
  const [change, setChange] = useState({ name: "", email: "", phone: "" });
  

useEffect(() => {
  handleFormVAlues()
 
  
}, [id]);


const  handleFormVAlues=async ()=>{
  if(id.id){
    await axios.get("http://localhost:5000").then((x)=>{
    let obj=x.data.filter((val)=> val._id===id.id)
    setChange({name:obj[0].name, email: obj[0].email, phone: obj[0].phone })
    })
  }else{
    setChange({ name: "", email: "", phone: "" })
  }
}




  const submittoBackend=async (data)=>{
    const res =await  axios.post("http://localhost:5000/add",data)
    navigate("/")
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(id.id){
      axios.patch(`http://localhost:5000/update/${id.id}`,change)
      setTimeout(() => {
        navigate("/")
      }, 100);
      
  
    }else{
    submittoBackend(change)
  }};
  const handleChange=(event)=>{
    
    setChange({
      ...change,
      [event.target.name]: event.target.value
      
    })
  }
 





  return (
    <div className="aboveForm">
      <Form className="Forms" onSubmit={handleSubmit} onChange={handleChange}>
        <h1>Add User</h1>
        <Form.Group>
          <Form.Label>Enter Your Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
            name="name"
            value={change.name}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter Your Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Email"
            name="email"
            value={change.email}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter Your Contact</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={change.phone}
          ></Form.Control>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
