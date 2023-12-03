// import React, { useState } from 'react'
import '../Styles/Navbar.css'
import { Stack, Typography, Box, Button } from '@mui/material';
import { motion } from "framer-motion";


const Navbar = () => {
  // const [toggle, setToggle] = useState(false);


  return (
    <Stack direction={'row'} gap={2} sx={{ alignItems: 'center', }}>
      <Box>
        <img style={{ height: '50px', width: "100px" }} src="https://t3.ftcdn.net/jpg/05/26/49/54/360_F_526495455_BjSuLi3NtlTSeZuZztEipU8P60RsXCeg.jpg" alt="" />
      </Box>
      {/* <Box sx={{ display: "flex", flexDirection: 'row', gap: '10rem', padding: '0' }}>
        <Typography sx={{ fontSize: "1.5rem", color: 'white' }}>Home</Typography>
        <Typography sx={{ fontSize: "1.5rem", color: 'white' }}>Protfolio</Typography>
        <Typography sx={{ fontSize: "1.5rem", color: 'white' }}>Contact</Typography>
        <Typography sx={{ fontSize: "1.5rem", color: 'white' }}>About</Typography>
        <Button variant='text' color='success'>Home</Button>
        <Button variant='contained' color='secondary' >Protfolio</Button>
        <Button variant='outlined' color='warning'>Contact</Button>


      </Box> */}
      <motion.h1 animate={{ fontSize: 150,color:'white',x:10,y:-10}}>Sugesh Chandra</motion.h1>
    </Stack>



  )
}

export default Navbar
