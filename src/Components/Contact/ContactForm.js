import React,{useState} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import Swal from 'sweetalert2';
const H1 = styled.h1`
font-size:3rem;
color:white;
margin:0px;
margin-right:10px;
margin-bottom:.5px;
text-shadow: 2px 2px 2px black;
font-family:'Changa One';
::selection {
   background:black;
}
::-moz-selection {
background:black;
}
`
const FormContainer = styled.div`
/* width:100%;
display:flex;
margin:5%;
flex-direction:column;
justify-content:center;
align-items:center; */
/* min-width: 50em;
 max-width: 50em;
  */
 margin: 1em ;
 padding: 2em;
 display: flex;
 flex-wrap: wrap;
 flex-direction: column;
 align-content: center;
 justify-content: space-evenly;
 /* box-shadow: 0px 12px 22px -1px #545309; */
 font-family: "Ubuntu", sans-serif;
`
const TopForm = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
margin:.5em;
`
const TextArea = styled.textarea`
 margin:1em;
 width:20em;
height:17vh;
`
const Input = styled.input`
margin:5%;
width:20em;
height:3vh;
`
const Center=styled.div`
display:flex;
justify-content:center;
align-items:center;
`
const Button = styled.button`
margin:1em;
width:7rem;
border-style:solid;
border-color:black;
background-image:linear-gradient(135deg, rgb(245, 177, 77),rgb(237, 53, 115));
font-family:'Changa One';
:hover{
 color:white;
 border-style:solid;
border-color:white;
 transform:scale(1.5);
 transition:.5s;
}
`
export default function ContactForm() {
 const [inputValue, setInputValue] = useState({
 name: "",
 email:"",
 company:"",
 response:""
 });
 const changeHandler = event => {
   setInputValue({...inputValue, name: event.target.value});
 }
 const emailHandler = event => {
   setInputValue({...inputValue, email: event.target.value});
 }
 const companyHandler = event => {
   setInputValue({...inputValue, company: event.target.value});
 }
 const responseHandler = event => {
   setInputValue({...inputValue, response: event.target.value});
 }
 const handleSubmit = event => {
   event.preventDefault();
   console.log(inputValue,"input Value")
   axios.post("URL",inputValue)
   .then((res) => {
     console.log(res)
   }).catch((err) => {
console.error(err)
   })
   Swal.fire({
     position: 'center',
     type: 'success',
     title: 'Thank You For Reaching Out!',
     showConfirmButton: false,
     timer: 1000
   })
 };
 return (
   <div>
     <H1>Contact Me Below!</H1>
     <form onSubmit={event => handleSubmit(event)}>
     <FormContainer>
<TopForm>
         <Input type="text" onChange={event => changeHandler(event)} placeholder="Name"/>
         <Input type = "text" onChange={event => companyHandler(event)}placeholder = "Company"/>
         <Input type="text" onChange={event => emailHandler(event)} placeholder="Email"/>
         <TextArea type="text" onChange={event => responseHandler(event)} placeholder="message"/>
         </TopForm>
       <Center>
       <Button >Send!</Button>
       </Center>
      </FormContainer>
     </form>
   </div>
 )
}