import React from 'react';
import './App.css';
import { Box, Typography } from '@mui/material';
import TextAreaWithTitle from './components/TextAreaWithTitle';
import { MaskButton } from './components/MaskButton';
import UploadFilesSection from './components/UploadFilesSection';

function App() {
  return (
    <div className="App">
      {/* APP TITLE */}
      <Box mb={2}>
        <Typography variant='h4' className='app-title'>Healthcare Data Masking</Typography>
      </Box>

      {/* TEXT AREAS SECTION */}
      <Box display='flex' justifyContent={'space-between'} my={3}>
        <TextAreaWithTitle title='Data to be Masked'/>
        <TextAreaWithTitle title='Masked Data'/>
      </Box>
      <Box>
        <MaskButton variant='contained' className='mask-btn'>MASK DATA</MaskButton>
      </Box>

      {/* UPLOAD FILES SECTION */}
      <Box display='flex' flexDirection={'column'} alignItems='flex-start' mt={4} ml={'4%'}>
        <Typography variant='subtitle1'><b>Upload Files to be Masked</b></Typography>
        <UploadFilesSection />
      </Box>
    </div>
  );
}

export default App;
