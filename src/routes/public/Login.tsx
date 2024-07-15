import React, { useRef, useState } from 'react'
import { Email, Password, Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, IconButton, InputAdornment, TextField } from '@mui/material'
import useFetch from '../../hooks/useFetch'
import { useAuth } from '../../context/auth'
import { Navigate, useNavigate } from 'react-router-dom'
import { useToasts } from '../../context/toasts'

type FormType = {
  email: string
  password: string
}

const formDefault = {
  email: '',
  password: '',
}

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passRef = useRef<HTMLInputElement>(null)

  const navigate = useNavigate()
  const { addToast } = useToasts()
  const { fetch, loading } = useFetch()

  const {
    state,
    actions: { login },
  } = useAuth()

  const [form, setForm] = useState<FormType>(formDefault)
  const [errors, setErrors] = useState<FormType>(formDefault)
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(!showPassword)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors(formDefault)
    const { id, value } = e.target
    setForm((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const errors = {
      email: '',
      password: '',
    }

    if (!form.email) errors.email = 'Email is required'
    if (!form.password) errors.password = 'Password is required'

    if (errors.email || errors.password) {
      if (errors.email) emailRef?.current?.focus()
      else passRef?.current?.focus()
      return setErrors(errors)
    }

    fetch('login', { body: form }).then(({ error, data }) => {
      if (error) {
        emailRef.current?.focus()
        return addToast(error, 'error')
      }
      addToast(`Nice to see you come back ${form.email}!`, 'success')
      login({ user: form.email, ...data })
      navigate('/')
    })
  }

  const handleReset = () => {
    setForm(formDefault)
    setErrors(formDefault)
  }

  if (state.loggedIn) return <Navigate to='/' />

  return (
    <Box>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <Box display='flex' flexDirection='column' justifyContent='center' alignContent='center'>
          <TextField
            inputRef={emailRef}
            fullWidth
            autoFocus
            margin='normal'
            variant='outlined'
            label='Email'
            id='email'
            value={form.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position='end'>
                  <IconButton edge='start'>
                    <Email />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            inputRef={passRef}
            fullWidth
            variant='outlined'
            margin='normal'
            label='Password'
            type={showPassword ? 'text' : 'password'}
            id='password'
            autoComplete='password'
            value={form.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            InputProps={{
              startAdornment: (
                <InputAdornment position='end'>
                  <IconButton edge='start'>
                    <Password />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton aria-label='toggle password visibility' onClick={handleClickShowPassword} edge='end'>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box display='flex' justifyContent='flex-end'>
            <Button type='reset' variant='contained' sx={{ m: 1 }} disabled={loading}>
              Clear
            </Button>
            <Button type='submit' variant='contained' sx={{ m: 1 }} disabled={loading}>
              Log In
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  )
}

export default Login
