import React,{useState} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import * as Yup from "yup";
const H5 = styled.h6`
  color:white;
`;
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
 ::selection{
    background:#F5A552;
}
::-moz-selection {
 background:#F5A552;

}
`
const TopForm = styled.div`
display:flex;
flex-direction:column;

justify-content:center;

margin:.5em;

`
const TextArea = styled.textarea`
margin:4%;
 width:50vw;
height:17vh;
::selection{
    background:black;
}
::-moz-selection {
 background:#F5A552;

}
&:focus {
    outline-color:#F5A552;
}
`
const Input = styled.input`
&:focus {
  outline-color:#F5A552;
}
::selection{
    background:#F5A552;
}
::-moz-selection {
 background:#F5A552;

}
margin:4%;
width:50vw;
height:3vh;
`
const Center=styled.div`
display:flex;
justify-content:center;
align-items:center;
`
const Button = styled.button`
font-size:.7rem;
margin:1em;
width:9vw;
height:3vh;
border-style:solid;
border-color:black;
background-image:linear-gradient(135deg, rgb(245, 177, 77),rgb(237, 53, 115));
font-family:'Changa One';
cursor: pointer;
min-width:50px;
:hover{
 color:white;
 border-style:solid;
border-color:white;
 transform:scale(1.5);
 transition:.5s;
}
`
export default function ContactForm({touched,errors}) {
  const [state, setState] = useState({})

  const defaultForm = {
    name: '',
    email: '',
    company: '',
    message: '',
    error: ''
  }

  const [form, setForm] = useState(defaultForm);

  const setError = error => {
    setForm({
      ...form,
      error
    })
  }

  const sendMessage = e => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const company = form.company.trim();
    const message = form.message.trim();

    setState({
      ...state,
  
    })
  


    axios.post('https://nodemailer-to-bsoghigian.herokuapp.com/send', {
      name,
      email,
      company,
      message
    })
    .then(() => {
      setState({
        ...state

      })
      setForm(defaultForm);
    })
    .catch(err => {
      setState({
        ...state

      })
    })
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Thank You For Reaching Out!',
      showConfirmButton: false,
      timer: 1500
    })
    console.log(state)
    document.getElementById("FormClear").reset();
  }

  const handleChange = e => {
    setError('');
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
//  const handleSubmit = event => {
//    event.preventDefault();
//    console.log(inputValue,"input Value")
//    axios.post("https://nodemailer-to-bsoghigian.herokuapp.com/send",inputValue)
//    .then((res) => {
//      console.log(res)
//    }).catch((err) => {
// console.error(err)
//    })
//    validationSchema: Yup.object().shape({
//     name: Yup.string()
//       .required("This field is required")
//     // passwordConfirmation: Yup.string()
//     // .oneOf([Yup.ref('password'), null], 'Passwords must match'),
//   })

//  };
 return (
   <div>
     <H1>Contact Me Below!</H1>
     <form id="FormClear">
       <FormContainer>

        
        <Input  type='text' name='name' value={form.name} onChange={handleChange} placeholder="Name"/>
      

       
        <Input  type='email' name='email' value={form.email} onChange={handleChange} placeholder="Email"/>
   

  
        <Input  type='text' name='company' value={form.company} onChange={handleChange} placeholder="Company"/>
   

        
        <TextArea  name='message' value={form.message} onChange={handleChange} placeholder="Message"/>
      

      <Center>
      <Button  onClick={sendMessage}>Send!</Button>
      </Center>
      </FormContainer>
    </form>

     {/* <form onSubmit={event => handleSubmit(event)} id="FormClear">
     <FormContainer>
<TopForm>
         <Input name="name" id="name" type="text" onChange={event => changeHandler(event)} placeholder="Name"/>
    
         <Input type = "text" onChange={event => companyHandler(event)}placeholder = "Company"/>
         <Input type="text" onChange={event => emailHandler(event)} placeholder="Email"/>
         <TextArea type="text" onChange={event => responseHandler(event)} placeholder="message"/>
         </TopForm>
       <Center>
       <Button >Send!</Button>
       </Center>
      </FormContainer>
     </form> */}
   </div>
 )
}