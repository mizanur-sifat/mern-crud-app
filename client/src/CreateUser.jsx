import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function CreateUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();
    const Submit = (e) => {
        e.preventDefault();
        
        // Input validation
        if (!name || !email || !age) {
            alert("Please fill out all fields");
            return;
        }

        axios.post("http://localhost:3001/createUser", { name, email, age })
            .then(result => {
                console.log(result);
                navigate('/')
                alert("User created successfully!");
            })
            .catch(err => {
                console.log(err);
                alert("Error creating user.");
            });
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-4 shadow-lg">
                <h1 className="mb-4 text-center">Create User</h1>
                <form onSubmit={Submit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="age" className="form-label">Age</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            className="form-control"
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-success">Create User</button>
                </form>
            </div>
        </div>
    );
}

export default CreateUser;
