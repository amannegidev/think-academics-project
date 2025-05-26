import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Layout from "../components/layouts/Layout";

const API = import.meta.env.VITE_API_BASE_URL;


const ForgotPass = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

      const handleForgotpass = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${API}/api/v1/auth/forgotpass`, {
                email,
                newPassword,
                answer
            });
            if (res && res.data.success) {
                toast.success(res.data.message);
                navigate("/login"); 
            } else {
                toast.error(res.data.message);
            }
        } catch (err) {
            console.error(err);
            toast.error("Login failed. Please try again.");
        }
    };

    return (
        <Layout>
            <div className="flex justify-center w-10/12 mx-auto mt-24 ">
             
                <div className="flex md:w-1/2 justify-center py-10 items-center bg-white lg:p-20">
                    <form className="bg-white w-full" onSubmit={handleForgotpass}>
                        <h1 className="text-gray-800 font-bold text-lg uppercase mb-2">reset password Here!</h1>
                        <hr />
                        <p className="font-[Ubuntu] pr-2 my-3">
                            Enter your email and password to access your account.
                        </p>

                        <div className="flex items-center mb-4">
                            <input
                                className="border rounded w-full py-2 px-3"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email"
                                required
                            />
                        </div>

                        <div className="flex items-center mb-4">
                            <input
                                className="border rounded w-full py-2 px-3"
                                type="password"
                                name="newPassword"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="Enter new password"
                                required
                            />
                        </div>
                        <div className="flex items-center mb-4">
                            <input
                                className="border rounded w-full py-2 px-3"
                                type="text"
                                name="answer"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                placeholder="Enter answer"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="block w-full bg-[#FBA518] hover:bg-[#fba418cb] mt-4 py-2  text-white font-semibold mb-2"
                        >
                            Reset Password
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default ForgotPass;
