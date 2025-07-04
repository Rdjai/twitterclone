import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftComponent from '../component/leftcomponent';
import MainContent from '../component/mainContent';
import RighComponent from '../component/RighComponent';
import { getUserProfile } from '../services/apiService';

const HomePage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const getdata = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) return navigate("/login");

            const res = await getUserProfile();
            if (res?.error) {
                alert(res.error);
                localStorage.removeItem("token");
                return navigate("/login");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
            alert(error?.error || "Something went wrong");
            localStorage.removeItem("token");
            navigate("/login");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getdata();
    }, []);

    if (loading) return <div className="text-center mt-20">Loading...</div>;

    return (
        <div className='homepage bg-black text-white flex h-screen overflow-hidden'>
            <LeftComponent />
            <MainContent />
            <RighComponent />
        </div>
    );
};

export default HomePage;
