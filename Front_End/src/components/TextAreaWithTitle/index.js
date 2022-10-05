import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'

function TextAreaWithTitle(props) {
  const {title} = props
  const [text, setText] = useState('')
  const textChangeHandler = (e) => {
    setText(e.target.value)
  }
  return (
    <Box flex={1}>
      <Box mb={1}>
        <Typography variant='h6'>{title}</Typography>
      </Box>
      <textarea value={text} onChange={textChangeHandler} className='textarea' />
    </Box>
  )
}

export default TextAreaWithTitle