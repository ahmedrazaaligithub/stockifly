import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, message } from "antd";
import { ThemeInput, ThemeButton } from "../components";
import { FaArrowLeft } from "react-icons/fa6";
function LoginForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);
  const onFinish = (values) => {
    setLoading(true);
    console.log("Success:", values);
    message.success("user login");
    navigate("/admin/dashboard");
    setLoading(false);
  };
  useEffect(() => {
    console.log("resetPassword", resetPassword);
  }, [resetPassword]);
  return (
    <>
      <div className="h-full py-8 px-6 w-2/3 shadow-lg flex flex-col justify-center">
        <div className="flex justify-center">
          <img src="./images/logotext.png" className="w-36" alt="" />
        </div>

        {/* login form */}
        <div className="mt-6">
          {!resetPassword && (
            <>
              <p className=" font-semibold text-lg">Sign In</p>
              <p className="text-sm mt-1">Please login to your account</p>
            </>
          )}

          <Form name="login_form" onFinish={onFinish}>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <ThemeInput
                className={"mt-7"}
                label={"Email or Phone"}
                placeholder={"Please Enter Your Email or Phone"}
                type={"email"}
              />
            </Form.Item>
            {!resetPassword && (
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <ThemeInput
                  className={""}
                  label={"Password"}
                  placeholder={"Please Enter Password"}
                  type={"password"}
                />
              </Form.Item>
            )}

            <ThemeButton htmlType="submit" className={"w-full mt-2 text-white"}>
              {resetPassword ? "Reset" : "Login"}
            </ThemeButton>

            <p
              className="font-semibold  text-blue mt-4  text-center cursor-pointer flex justify-center items-center gap-1"
              onClick={() => setResetPassword(!resetPassword)}
            >
              {resetPassword && <FaArrowLeft className="inline-block"/>} 
              {resetPassword ? ` Back` : "Reset Password"}
            </p>
          </Form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
