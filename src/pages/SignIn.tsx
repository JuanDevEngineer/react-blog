import { FC } from 'react';
import { Link } from 'react-router-dom';

const SignIn = (): JSX.Element => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="flex h-4/5 w-full flex-col gap-4 md:w-4/12">
        <h2 className="text-center text-3xl font-semibold text-white">Sign In</h2>
        <div className="h-4/5">
          <form className="p-5">
            <div className="mt-5">
              <input
                type="text"
                className="mb-4 w-full rounded-md p-3 text-center text-lg font-medium text-gray-900 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                className="mb-4 w-full rounded-md p-3 text-center text-lg font-medium text-gray-900 focus:outline-none"
                placeholder="Enter your password"
              />
            </div>
            <button className="m-0 block w-full rounded-md bg-emerald-500 p-3 text-lg font-bold text-white transition hover:bg-emerald-600 hover:ease-out">
              Sign In
            </button>
          </form>
        </div>
        <div className="flex justify-between px-5">
          <Link className="text-white" to="/sign-up">
            ¿You don't have an account yet?
          </Link>
          <Link className="text-white" to="/home">
            Go to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
