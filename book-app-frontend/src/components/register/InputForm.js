import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import './inputForm.css'

const InputForm = () => {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userDetails = {
            name,
            username,
            email,
            phone,
            password
        }

        await axios.post(`https://book-app-api-uuu2.onrender.com/user/registration`, userDetails)
            .then((res) => {
                toast.success(res.data.message)
                setTimeout(() => {
                    window.location.href = '/user/login'
                }, 1000)
            }).catch((err) => {
                toast.error(err.response.data.message)
            })
    }

    const handleLogIn = () => {
        window.location.href = '/user/login'
    }

    return (
        <Form className='signup-form' onSubmit={handleSubmit}>
            <h2 className='m-5'>Register to your Book App</h2>
            <Form.Group className='mb-3 col-form-label' controlId='name'>
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                    type='text'
                    required
                    placeholder='Enter name'
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                />
            </Form.Group>
            <Form.Group className='mb-3 col-form-label' controlId='username'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type='text'
                    required
                    placeholder='Enter username'
                    value={username}
                    onChange={(e) => { setUsername(e.target.value) }}
                />
            </Form.Group>
            <Form.Group className='mb-3 col-form-label' controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type='email'
                    required
                    placeholder='email@example.com'
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
            </Form.Group>
            <Form.Group className='mb-3 col-form-label' controlId='phone'>
                <Form.Label>Enter Your Phone Number</Form.Label>
                <Form.Control
                    type='text'
                    required
                    placeholder='Enter your phone number'
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value) }}
                />
            </Form.Group>
            <Form.Group className='mb-3 col-form-label' controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type='password'
                    required
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                />
            </Form.Group>
            <Button className='btn btn-primary' type='submit'>Sign Up</Button>
            <div className='mt-3'>
                <p className='mb-1'>Already have an account Login here.</p>
                <Button className='btn btn-primary' onClick={handleLogIn}>Login</Button>
            </div>
        </Form>
    )
}

export default InputForm