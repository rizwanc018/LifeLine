import { useFormik } from "formik"
import * as Yup from 'yup'
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../Spinner";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../slices/authSlice";

const UserRegisterForm = () => {

  const [submitting, setSubmitting] = useState(false)
  const [err, setErr] = useState()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { userInfo } = useSelector(state => state.auth)

  useEffect(() => {
      if (userInfo)
          navigate('/')
  }, [userInfo])


  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      fname: Yup.string().required("Required"),
      lname: Yup.string().required("Required"),
      email: Yup.string().email('Invalid email').required('Required'),
      mobile: Yup.string().required('Required'),
      password: Yup.string().required('Password is required'),
      confirmPassword: Yup.string().required('Passwords must match').oneOf([Yup.ref('password')], 'Passwords must match'),
    }),
    onSubmit: async (values) => {
      setSubmitting(true)
      setErr('')
      try {
        const response = await axios.post(`/api/user/reg`, { ...values })
        console.log("🚀 ~ file: UserRegisterForm.jsx:50 ~ onSubmit: ~ response:", response)
        dispatch(setCredentials({ ...response.data }))
        navigate('/')
      } catch (error) {
        setErr(error.response.data.err)
      }
      setSubmitting(false)
    }
  })
  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto">
        <div className="w-1/2 rounded-xl mx-auto p-10 shadow-xl border-solid border border-primary">
          <img src="/assets/logo.png" className="mb-4" alt="" />
          <h2 className="text-xl text-primary-600 mb-6 font-semibold ">User Register</h2>
          {/* fname and lname */}
          <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-2 gap-10 mb-5">
              <div>
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder="FirstName"
                  value={formik.values.fname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.fname && formik.errors.fname && <p className="error">{formik.errors.fname}</p>}
              </div>
              <div>
                <label htmlFor="laname">Last Name</label>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  placeholder="LastName"
                  value={formik.values.lname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.lname && formik.errors.lname && <p className="error">{formik.errors.lname}</p>}
              </div>

              {/* Email and mobile */}
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && <p className="error">{formik.errors.email}</p>}
              </div>
              <div>
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  placeholder="Mobile"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.mobile && formik.errors.mobile && <p className="error">{formik.errors.mobile}</p>}
              </div>
              {/* password */}
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Passowrd"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && <p className="error">{formik.errors.password}</p>}
              </div>
              {/* confirm password */}
              <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Passowrd"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword && <p className="error">{formik.errors.confirmPassword}</p>}
              </div>
            </div>
            {!submitting ?
              <button className='mt-4 last:border-2 rounded px-5 py-2  border-primary text-primary hover:bg-primary hover:text-white active:bg-primary active:text-white' type="submit" >Register</button>
              : <Spinner className='ps-72' />
            }
            {err && <p className="mx-auto w-full text-center error mt-4 text-xl">{err}</p>}
          </form>
          <p className="mt-6">Already Registered? <Link to='/login' className="text-primary-600">Login</Link> </p>
        </div>
      </div>
    </div>
  )
}

export default UserRegisterForm