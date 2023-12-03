import React from 'react'
import { Typography } from '@mui/material'
import { motion } from 'framer-motion';

const MuiTypography = () => {
  return (
    <div>
      <Typography variant='h1' color='white' >Catalyst</Typography>
      <Typography variant='h2'>Catalyst</Typography>
      <Typography variant='h3'>Catalyst</Typography>
      <Typography variant='h4'>Catalyst</Typography>
      <Typography variant='h5'>Catalyst</Typography>
      <Typography variant='h6'>Catalyst</Typography>
      <motion.button initial={{ x: '-20vw' }} animate={{ x: 0 }}>
        Click Here
      </motion.button>
    </div>
  )
}

export default MuiTypography