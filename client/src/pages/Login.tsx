import InputFields from "../components/InputFields";
import { FaUser } from "react-icons/fa";
import { TbPassword } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="flex sm:px-0 px-2 w-screen bg-[url('./840843081452.jpg')] bg-center bg-cover h-screen items-center justify-center">
      <div className="flex border-primary-light border-2 w-[480px] md:w-[784px] md:flex md:justify-between bg-slate-900/50 backdrop-blur p-8 rounded">
        <div className="flex w-full sm:w-[400px] gap-6 flex-col">
          <div className="text-center flex flex-col">
            <p className="text-slate-200 text-[clamp(16px,1.5rem,24px)] font-semibold">
              Welcome Back!
            </p>
            <p className="text-slate-400 text-[clamp(8px,0.8rem,16px)]">
              We're excited to see you again!
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <InputFields
              name={"Email"}
              type={"email"}
              placeholder={"Email or UserName"}
              icons={FaUser}
            />
            <InputFields
              name={"Password"}
              type={"password"}
              placeholder={"Password"}
              icons={TbPassword}
            />
          </div>
          <Link to="/forgotpassword">
            <div className="text-primary w-fit text-xs after:block after:w-0 hover:after:w-full after:transition-[width] duration-300 after:bg-primary after:h-[1px] after:rounded">
              Forgot your password?
            </div>
          </Link>
          <button className="bg-[#64FFDD40] border-primary border-[1px] duration-200 text-primary rounded-md w-full py-2">
            Log In
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
          <div className="flex items-center gap-2">
            <div className="text-slate-500 text-xs">Need an account?</div>
            <Link to="/register">
              <div className="text-primary w-fit text-xs after:block after:w-0 hover:after:w-full after:transition-[width] duration-300 after:bg-primary after:h-[1px] after:rounded">
                Register
              </div>
            </Link>
          </div>
        </div>
        <div className="hidden md:w-[250px] py-auto items-center justify-center md:flex md:flex-col">
          <div className="w-40 aspect-square mb-6 rounded bg-slate-200"></div>
          <div className="text-slate-300 text-xl mb-3 font-semibold">
            Log in with QR Code
          </div>
          <div className="text-slate-500 text-center text-sm">
            Scan this with the <strong>Proj X mobile app</strong>to log in
            instantly
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
