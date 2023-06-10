import React from "react";
import { FaUser } from "react-icons/fa";
import { TbPassword } from "react-icons/tb";
import InputFields from "../components/InputFields";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex sm:px-0 px-2 w-screen bg-[url('./840843081452.jpg')] bg-center bg-cover h-screen items-center justify-center">
      <div className="flex border-primary-light border-2 w-[480px] bg-slate-900/50 backdrop-blur p-8 rounded">
        <div className="flex w-full sm:w-[400px] gap-6 flex-col">
          <div className="text-center font-semibold text-xl text-slate-200">
            Create an Account
          </div>
          <div className="flex flex-col gap-4">
            <InputFields
              name={"Email"}
              type={"email"}
              placeholder={"Email"}
              icons={MdEmail}
            />
            <InputFields
              name={"Username"}
              type={"text"}
              placeholder={"UserName"}
              icons={FaUser}
            />
            <InputFields
              name={"Password"}
              type={"password"}
              placeholder={"Password"}
              icons={TbPassword}
            />
          </div>
          <button className="bg-[#64FFDD40] border-primary border-[1px] duration-200 text-primary rounded-md w-full py-2">
            Continue
          </button>
          <div className="flex items-center justify-center gap-2">
            <div className="w-full h-[1px] rounded bg-primary-light" />
            <label className="text-primary text-xs">OR</label>
            <div className="w-full h-[1px] rounded bg-primary-light" />
          </div>
          <div className="hover:scale-[1.02] transition-transform duration-300 bg-slate-200 p-2 rounded-full flex items-center gap-2">
            <FcGoogle className="text-2xl" />
            <div className="w-full text-center text-slate-800 cursor-pointer">
              Continue with Google
            </div>
          </div>
          <Link to="/login" className="w-fit">
            <div className="text-primary w-fit text-xs after:block after:w-0 hover:after:w-full after:transition-[width] duration-300 after:bg-primary after:h-[1px] after:rounded">
              Already have an account?
            </div>
          </Link>
          <div className="text-xs text-slate-500">
            By registering, you agree to Proj X's
            <Link to="/terms">
              <label className="mx-1 cursor-pointer text-primary inline-block w-fit text-xs after:block after:w-0 hover:after:w-full after:transition-[width] duration-300 after:bg-primary after:h-[1px] after:rounded">
                Terms of Service
              </label>
            </Link>
            and
            <Link to="/privacy">
              <label className="mb-2 text-primary cursor-pointer inline-block w-fit text-xs after:block after:w-0 hover:after:w-min after:transition-[width] duration-300 after:bg-primary after:h-[1px] after:rounded">
                Privacy Policy.
              </label>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
