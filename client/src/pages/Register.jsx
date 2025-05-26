import { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import toast from "react-hot-toast";
import Layout from "../components/layouts/layout"; 

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [answer, setAnswer] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    // Form submission 
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const userData = {
      name,
      email,
      password,
      phone,
      address,
      answer,
    };

    const res = await axios.post('/api/v1/auth/register', userData, {
      headers: { 'Content-Type': 'application/json' }
    });

    if (res && res.data.message) {
      toast.success(res.data.message);
      navigate('/login');
    } else {
      toast.error('Registration failed');
    }
  } catch (err) {
    console.error(err);
    toast.error('Something went wrong');
  }
};



return (
  <Layout>
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row w-11/12 bg-white shadow-xl rounded-lg overflow-hidden">

        <div className="hidden md:flex md:w-1/2 bg-red-100 justify-center items-center p-10">
          <div className="text-center">
            <h1 className="text-black font-bold text-4xl mb-2"> welcome user register here !</h1>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-8 sm:p-10">
          <form
            className="w-full space-y-5"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div>
              <h1 className="text-2xl font-bold text-gray-800 uppercase">Register Here!</h1>
              <hr className="border-gray-300 my-2" />
              <p className="text-sm text-gray-600">
                Join us by filling out the registration form below. Provide your details to gain access to exclusive features, updates, and services.
              </p>
            </div>

            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              required
            />

            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />

            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter address"
              required
            />

            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />

            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="number"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
              required
            />

            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              name="answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Security question answer"
              required
            />

          

            <button
              type="submit"
              className="w-full py-2 bg-[#FBA518] text-white font-semibold rounded-md hover:bg-[#fba418b1] transition"
            >
              Register
            </button>

            <p className="text-sm text-center text-gray-600">
              Already registered?{" "}
              <Link to="/login" className="text-indigo-600 hover:underline font-medium">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </Layout>
);


};

export default Register;
