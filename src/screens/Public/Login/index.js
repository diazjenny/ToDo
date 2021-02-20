import React, { useState } from 'react'
import { Main } from '../../../components'
import { Layout } from '../../../components/Layout'
import { } from '../../Private/Users/components/api'

const Login = () => {

    // const [name, setName] = useState("");
    // const [lastname, setLasname] = useState("");
    // const [password, setPassword] = useState("");

    const authenticate = user => {
        console.log(user);
    }

    return (
        <Layout hideHeader='true' hideAside='true'>
            <Main>
                <h2>Login</h2>
                <form className="row g-3">

                    <div className="col-12 ">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputname" placeholder="first name" />
                    </div>

                    <div className="col-12">
                        <label htmlFor="fullName" className="form-label">Lastname</label>
                        <input type="text" className="form-control" id="lastname" placeholder="fullname" />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" />
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </form>
            </Main>
        </Layout>
    )
}

export { Login }
