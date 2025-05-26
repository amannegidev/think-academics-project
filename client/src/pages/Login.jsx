import { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Layout from '../components/layouts/layout';
import { useAuth } from '../context/AuthContex'; 

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const { auth, setAuth } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/v1/auth/login', { email, password });
      if (res && res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem('auth', JSON.stringify(res.data));
        navigate(location.state?.from || '/');
      } else {
        toast.error(res.data.message || 'Login failed');
      }
    } catch (err) {
      console.error(err);
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row w-11/12 bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="hidden md:flex md:w-1/2 bg-red-100 items-center justify-center text-black p-10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Welcome Back!</h2>
              <p className="text-lg">Continue shopping with ease and security.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center p-8 sm:p-10">
            <form className="w-full space-y-6" onSubmit={handleLogin}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-2xl font-bold text-gray-800">Login Here!</h1>
                <Link
                  to="/forgotpass"
                  className="text-sm text-indigo-600 hover:underline mt-2 sm:mt-0"
                >
                  Forgot password?
                </Link>
              </div>

              <hr className="border-gray-300" />

              <p className="text-gray-600">
                Enter your email and password to access your account.
              </p>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-[#FBA518] text-white font-semibold rounded-md hover:bg-[#fba418e1] transition"
              >
                Login
              </button>

              <div className="text-center mt-6">
                <span className="text-sm text-gray-600">
                  Don’t have an account?{' '}
                  <Link
                    to="/register"
                    className="text-indigo-600 font-medium hover:underline"
                  >
                    Register
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
