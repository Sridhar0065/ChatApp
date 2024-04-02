import React, { useState } from 'react'
import {Container,Paper, TextField, Typography, Button, Stack, Avatar, IconButton} from "@mui/material"
import {CameraAlt as CameraAltIcon} from '@mui/icons-material'
import { InputError, VisuallyHiddenInput } from '../components/styles/StyledCompnents.'
import {useFileHandler, useInputValidation} from '6pp'

const Login = () => {

// TODO
// *********** Validators && Gradient **************

  const [isLogin,setIsLogin] = useState(true);
  const name = useInputValidation("");
  const bio = useInputValidation("");
  const loginUserName = useInputValidation("");
  const loginPassword = useInputValidation("");
  const registerUserName = useInputValidation("");
  const registerPassword = useInputValidation("");
  const avatar = useFileHandler("single");
  
  const toggleLogin = ()=>{
    setIsLogin(!isLogin);
  }

  const handleLogin = (e)=>{
    e.preventDefault();
  }

  const handleSignUp = (e)=>{
    e.preventDefault();
  }
  
  return (
    <div style={{

    }}>
    <Container component={"main"} maxWidth="xs" sx={{
      display : "flex",
      justifyContent : "center",
      alignItems : "center",
      height : "100vh"
    }}>
      <Paper className="hideScrollBar" elevation={3} sx={{
        display : "flex",
        maxHeight : '90%',
        flexDirection : "column",
        alignItems : "center",
        padding : "1.5rem 2rem",
        overflow : "auto",
        "::-webkit-scrollbar" : {
          display: "none"
        }
      }}>
        {isLogin ? (
          <>
            <Typography variant='h5'>Login</Typography>
            <form style={{
              width:"100%"
            }} onSubmit={handleLogin}>
              <TextField required size='small' fullWidth label="UserName" value={loginUserName.value} onChange={loginUserName.changeHandler} margin='normal' variant='outlined'/>
              <TextField required size='small' fullWidth label="Password" value={loginPassword.value} onChange={loginPassword.changeHandler} type="password" margin='normal' variant='outlined'/>
              <Button type='submit' variant='contained' color='primary' fullWidth
              sx={{
                marginTop : "0.75rem"
              }}>
                Login
              </Button>
              <Typography textAlign={'center'} sx={{
                marginTop : "0.75rem"
              }}>Or</Typography>
              <Button fullWidth variant='text' sx={{
                textTransform : "none",
              }} onClick={toggleLogin}>
                Don't have an account ? Sign Up
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant='h5'>Sign Up</Typography>
            <form style={{
              width:"100%",
              marginTop : "1rem"
            }} onSubmit={handleSignUp}>
              <Stack position={'relative'} width={'10rem'} margin={'auto'}>
                <Avatar sx={{
                  width:"10rem",
                  height:'10rem',
                  objectFit : 'contain'
                }} src={avatar.preview}/>
                <IconButton sx={{
                  position : "absolute",
                  bottom : 0,
                  right : 0,
                  color:"white",
                  backgroundColor : "rgba(0,0,0,0.25)",
                  ":hover":{
                    backgroundColor : "rgba(0,0,0,0.5)",
                  }
                }} component="label">
                  <>
                    <CameraAltIcon/>
                    <VisuallyHiddenInput type="file" onChange={avatar.changeHandler}/>
                  </>
                </IconButton>
              </Stack>
              {avatar.error && (<InputError error={avatar.error}/>)}
              <TextField required size='small' value={registerUserName.value} onChange={registerUserName.changeHandler} fullWidth label="UserName" margin='normal' variant='outlined'/>
              <TextField required size='small' value={name.value} onChange={name.changeHandler} fullWidth label="Name" margin='normal' variant='outlined'/>
              <TextField required size='small' value={bio.value} onChange={bio.changeHandler} fullWidth label="Bio" margin='normal' variant='outlined'/>
              <TextField required size='small' value={registerPassword.value} onChange={registerPassword.changeHandler} fullWidth label="Password" type="password" margin='normal' variant='outlined'/>
              <Button type='submit' variant='contained' color='primary' fullWidth
              sx={{
                marginTop : "0.75rem"
              }}>
                Sign Up
              </Button>
              <Typography textAlign={'center'} sx={{
                marginTop : "0.75rem"
              }}>Or</Typography>
              <Button fullWidth variant='text' sx={{
                textTransform : "none",
              }} onClick={toggleLogin}>
                Already have an account ? Login
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
    </div>
  )
}

export default Login