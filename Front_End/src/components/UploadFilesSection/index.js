import { Box, Button, Typography } from '@mui/material'
import React, {useCallback, useEffect, useState} from 'react'
import {useDropzone} from 'react-dropzone'

function UploadFilesSection() {
  const {acceptedFiles, getRootProps, getInputProps, isDragActive} = useDropzone({maxFiles: 2})
  const [uploadedFiles, setUploadedFiles] = useState([])
  const files = uploadedFiles.map(file => (
    <Box key={file.path}>
        <Typography variant='body1' key={`${file.path}.name`}><b>File name:</b> {file.path}</Typography>
        <Typography variant='body1' key={`${file.path}.size`}><b>Size:</b> {file.size} bytes</Typography>
    </Box>
  ));

  useEffect(()=>{
    setUploadedFiles(acceptedFiles)
  }, [acceptedFiles])

  const onResetClickHandler = useCallback(()=>{
    setUploadedFiles([])
  },[])

  const { onClick } = getRootProps();

  return (
    <Box>
        <Box {...getRootProps()} className='file-drop-section'>
            <input {...getInputProps()} />
            {
                isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop files here, or click to select files</p>
            }
        </Box>
        { uploadedFiles.length>0 && <Box pt={2} textAlign='left'>
            {files}
        </Box>}
        <Box textAlign={'left'} mt={2} display='flex'>
            <Box mr={2}>
                <Button color='secondary' variant='contained' onClick={onClick}>Select Files</Button>
            </Box>
            <Button variant='contained' onClick={onResetClickHandler}>Reset</Button>
        </Box>
    </Box>
  )
}

export default UploadFilesSection