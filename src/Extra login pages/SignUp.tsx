interface SignUpProps {
    togglePanel: (panel: 'login' | 'signup' | 'forgot') => void;
}

export default function SignUp({ togglePanel }: SignUpProps) {
    return (
        <div>
            <h3 className="text-center text-xl font-bold mb-4 text-black">Create a new account</h3>
            <form id="signUp" method="POST" action="/api/signUp">
                <div className="mb-4">
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
                    />
                </div>
                <div className="mb-4">
                    <select
                        name="userType"
                        className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
                    >
                        <option>Choose...</option>
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                        <option value="parent">Parent</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary w-full py-2 text-sm font-bold bg-blue-500 text-white rounded"
                >
                    Sign Up
                </button>
            </form>
            <div className="text-center mt-4">
                <a onClick={() => togglePanel('login')} className="text-blue-500 cursor-pointer text-sm">Already have an account? Login here</a>
            </div>
        </div>
    );
}
