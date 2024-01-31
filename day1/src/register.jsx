import {
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { Button, ButtonGroup,HStack } from "@chakra-ui/react";
import {FaFacebook,FaTwitter,FaGoogle} from 'react-icons/fa'
import { Link } from "react-router-dom";

function Register() {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);
  const handleInputChange2 = (e) => setInput2(e.target.value);
  return (
    // Add a div element with some styles
    <div  style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}>
    <div
      style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        height: "65vh",
        width: "70vh",
        boxShadow:"0px 10px 10px gray"
      }}
    >
      <FormControl style={{ width: 400, height: 400}}>
        <FormLabel >Email</FormLabel>
        <Input type="email" value={input} onChange={handleInputChange} placeholder='Email'/>
        <FormLabel>First name</FormLabel>
        <Input placeholder='First name' />
        <FormLabel>Last name</FormLabel>
        <Input placeholder='Last name' />
        <FormLabel>Password</FormLabel>
        <Input type="Password" value={input2} onChange={handleInputChange2} placeholder='Password'/>
        <hr />
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Button colorScheme="teal" size="sm" ><Link to='/home'>
          Register 
          </Link>
        </Button>
        <span>&nbsp;&nbsp;
        <>or</>
        </span>
        </div>
        
        <div style={{display:"flex",alignItems:"center",justifyContent:"center", paddingTop:"1%"}}>
        <HStack>
        <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
          Facebook
        </Button>
        <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
          Twitter
        </Button>
        <Button colorScheme='orange' leftIcon={<FaGoogle />}>
          Google
        </Button>
        </HStack>
        </div>
      </FormControl>
    </div>
    </div>
  );
}

export default Register;
