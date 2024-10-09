'use client'
import campuslogo from '@/Logos/campusLog-logo.png';
import college from '@/Logos/collegeImage.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Login from './Login';
import SkeletonLoader from './LoginSkeleton';
import ResetPassword from './ResetPassword';
import SignUp from './SignUp';

export default function SignInPage() {
    const [activePanel, setActivePanel] = useState<'login' | 'signup' | 'forgot'>('login');
    const [loading, setLoading] = useState(true);

    const togglePanel = (panel: 'login' | 'signup' | 'forgot') => {
        setActivePanel(panel);
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <div className="container mx-auto p-5 mt-12 flex justify-center items-center">
            <div className="bg-white shadow-md flex w-full max-w-4xl">
                {loading ? (
                    <SkeletonLoader />
                ) : (
                    <>
                        {/* Left Image Column */}
                        <div className="hidden md:block w-1/2 p-10 bg-cover bg-center mt-16">
                            <Image
                                src={college}
                                alt="Company Logo"
                                width={300}
                                height={300}
                                className="mx-auto"
                            />
                        </div>

                        {/* Right Form Column */}
                        <div className="w-full md:w-1/2 p-8">
                            <div className="flex justify-center">
                                <div className="w-24 h-24">
                                    <Image
                                        src={campuslogo}
                                        alt="Company Logo"
                                        width={110}
                                        height={110}
                                        className="mx-auto"
                                    />
                                </div>
                            </div>

                            {/* Panels */}
                            {activePanel === 'signup' && <SignUp togglePanel={togglePanel} />}
                            {activePanel === 'login' && <Login togglePanel={togglePanel} />}
                            {activePanel === 'forgot' && <ResetPassword togglePanel={togglePanel} />}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
