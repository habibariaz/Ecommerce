import React from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <>
            <Header />
            <div className="row" style={{ margin: "0" }}>
                <div className="col-sm-4 mb-3 mb-sm-0 registration_topmargin">
                    <div className="card">
                    </div>
                </div>
                <div className="col-sm-4 registration_topmargin" >
                    <div className="card registration_card_shadow ">
                        <div className="card-body">
                            <div className="text-center">
                                <h3>Registration</h3>
                            </div>
                            <div className='registrationInputs_padding'>
                                <div >
                                    <input type="text" name="name" className='form-control input-underline' placeholder='Enter Name' />
                                </div><br />
                                <div>
                                    <input type="text" name="email" className='form-control input-underline' placeholder='Enter Email' />
                                </div><br />
                                <div>
                                    <input type="password" name="password" className='form-control input-underline' placeholder='Enter Password' />
                                </div><br />
                                <div>
                                    <input type="phone" name="phone" className='form-control input-underline' placeholder='Enter Phone' />
                                </div><br />
                                <div>
                                    <textarea name="address" id="address" className='form-control input-underline' placeholder='Enter Address'></textarea>
                                </div><br />

                                <div>
                                    <span style={{ color: "red" }}>Error</span>
                                </div><br />

                                <div className="text-center">
                                    <button type="button" className="btn btn-danger registrationBtn">SignUp</button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 registration_topmargin">
                    <div className="card cards_border_none">
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register