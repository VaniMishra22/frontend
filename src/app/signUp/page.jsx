'use client';
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react'
import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  name : Yup.string().min(4, 'Name',).required('?'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Password is required')
  .min(6, 'Too small' )
});

  const signUp = () => {

  const signUpForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: (values) => {
      console.log(values);
      // send values to backend
    },

    validationSchema : SignUpSchema
  });

  return (
    <section className="vh-100 bg-primary-subtle">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card shadow my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <div style={{
                    backgroundImage: `url('https://assets.materialup.com/uploads/7563d4bc-0ed9-4202-a86c-ac8dc46e73ef/preview.jpg')`,
                    height: '100%',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                  }}>

                  </div>
                  {/* <img
                    src="https://assets.materialup.com/uploads/7563d4bc-0ed9-4202-a86c-ac8dc46e73ef/preview.jpg"
                    alt="Sample"
                    className="img-fluid"
                  /> */}
                </div>
                <div className="col-xl-6">

                  <div className="card-body p-md-5">
                    <h3 className="mb-5 text-primary fw-bold">
                      Registration Form
                    </h3>
                    <form onSubmit={signUpForm.handleSubmit}>

                      <div class="mb-3">
                        <label for="" class="form-label">Email Address</label>
                        <input
                          type="text"
                          id="email"
                          onChange={signUpForm.handleChange}
                          value={signUpForm.values.email}
                          class="form-control"
                          placeholder=""
                        />
                        { signUpForm.touched.email && (
                            <small class="text-danger">{signUpForm.errors.email}</small>
                        )}
                      </div>
                      <div class="mb-3">
                        <label for="" class="form-label">Name</label>
                        <input
                          type="text"
                          id="name"
                          onChange={signUpForm.handleChange}
                          value={signUpForm.values.name}
                          class="form-control"
                          placeholder=""
                        />
                        {
                          signUpForm.touched.name &&
                          <small class="text-danger">{signUpForm.errors.name}</small>
                        }
                      </div>
                      <div class="mb-3">
                        <label for="" class="form-label">Password</label>
                        <input
                          type="text"
                          id="password"
                          onChange={signUpForm.handleChange}
                          value={signUpForm.values.password}
                          class="form-control"
                          placeholder=""
                        />
                        {
                          signUpForm.touched.password &&
                          <small class="text-danger">{signUpForm.errors.password}</small>
                        }
                      </div>
                      <div class="mb-3">
                        <label for="" class="form-label">Confirm Password</label>
                        <input
                          type="password"
                          id="confirmPassword"
                          onChange={signUpForm.handleChange}
                          value={signUpForm.values.confirmPassword}
                          class="form-control"
                          placeholder=""
                        />
                        {
                          signUpForm.touched.confirmPassword &&
                          <small class="text-danger">{signUpForm.errors.confirmPassword}</small>
                        }
                      </div>
                      <div className="form-check mb-4">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          id="form2Example33"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example33"
                        >
                          I Agree to Terms & Conditions
                        </label>
                      </div>
                      <div className="d-flex justify-content-end pt-3">
                        <button type="button" className="btn btn-light">
                          Reset all
                        </button>
                        <button type="submit" className="btn btn-primary ms-2">
                          Submit form
                        </button>
                      </div>
                    </form>
                    <p>Already Registered? <Link href='/login'>Login Here</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
  }
export default signUp;