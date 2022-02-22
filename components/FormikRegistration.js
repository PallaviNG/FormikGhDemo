import React from "react";
import {useFormik} from "formik";

function FormikRegistration(props) {

    let formik = useFormik({
        initialValues:{
            username: "",
            password: ""
        },
        validate: function(values) {
            let error = {};
            if(values.username==="") {
                error['username'] ="Username is required";
            }
            if(values.password===""){
                error['password']="Password is required";
            }
            return error;
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    // console.log(formik.values);

    // console.log(formik.touched);

    return (
        <div className="register">
            <h1>User Registration </h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="username">User Name</label>
                    <input type ="text" name="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete="off" />
                    {/* <span className="error">{formik.errors.username}</span> */}
                    {/* {formik.errors.username ? <span className="error">{formik.errors.username}</span> :null} */}
                    {(formik.touched.username && formik.errors.username)? <span className="error">{formik.errors.username}</span> :null}
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type ="text" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur = {formik.handleBlur} autoComplete="off" />
                    {/* <span className="error">{formik.errors.password}</span> */}
                    {/* {formik.errors.password ? <span className="error">{formik.errors.password}</span> :null} */}
                    {(formik.touched.password && formik.errors.password) ? <span className="error">{formik.errors.password}</span>:null}
                </div>
                <button type ="submit">Submit</button>
            </form>
        </div>
    );
}

export default FormikRegistration;