import { FC } from 'react';
import { Link } from 'react-router-dom';

const SignUp = (): JSX.Element => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="flex h-4/5 w-full flex-col gap-4 md:w-4/12">
        <h2 className="text-center text-3xl font-semibold text-white">Sign Up</h2>
        <div className="h-4/5">
          <form className="p-5">
            <div className="mt-5">
              <input
                type="text"
                className="mb-4 w-full rounded-md p-3 text-center text-lg font-medium text-gray-900 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <input
                type="text"
                className="mb-4 w-full rounded-md p-3 text-center text-lg font-medium text-gray-900 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <input
                type="text"
                className="mb-4 w-full rounded-md p-3 text-center text-lg font-medium text-gray-900 focus:outline-none"
                placeholder="Enter your number phone"
              />
            </div>
            <div>
              <input
                type="password"
                className="mb-4 w-full rounded-md p-3 text-center text-lg font-medium text-gray-900 focus:outline-none"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-10">
              <input
                type="password"
                className="mb-4 w-full rounded-md p-3 text-center text-lg font-medium text-gray-900 focus:outline-none"
                placeholder="Enter your Confirm password"
              />
            </div>
            <button className="m-0 block w-full rounded-md bg-emerald-500 p-3 text-lg font-bold text-white transition hover:bg-emerald-600 hover:ease-out">
              Sign Up
            </button>
          </form>
        </div>
        <div className="flex justify-between px-5">
          <Link className="text-white" to="/sign-in">
            ¿You already have an account?
          </Link>
          <Link className="text-white" to="/home">
            Go to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
