import React, { useState, useEffect } from 'react'
import { Layout } from '../../../components/Layout'
import { Main } from '../../../components/Main'
// import { usersApi } from '../../Private/Users/components/api'

const SignUp = () => {

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const admitUser = (e) => {
        e.preventDefault();
        console.log({
            name: name,
            lastname: lastname,
            email: email,
            password: password
        });
    }



    return (
        <Layout hideheader='true' hideAside='true'>
            <Main>
                <h2>Sign Up</h2>
                <form onSubmit={admitUser} className="row g-3">

                    <div className="col-12 ">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputname" placeholder="first name" onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="col-12">
                        <label htmlFor="fullName" className="form-label">Lastname</label>
                        <input type="text" className="form-control" id="lastname" placeholder="fullname"
                            onChange={(e) => setLastname(e.target.value)} />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    {//Para verificar si es la misma contraseña
                    /* <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">Repeat Password</label>
                        <input type="password" className="form-control" id="inputPassword4" />
                    </div> */}

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
            </Main>
        </Layout>
    )
}

export { SignUp }
