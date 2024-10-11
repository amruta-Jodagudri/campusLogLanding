interface LoginProps {
    togglePanel: (panel: 'login' | 'signup' | 'forgot') => void;
}

export default function Login({ togglePanel }: LoginProps) {
    return (
        <div>
            <h3 className="text-center text-xl font-bold mb-4 text-black">Login to your account</h3>
            <form id="login" method="POST" action="/api/authCheck">
                <div className="mb-4">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
                    />
                </div>
                <div className="mb-4 relative">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
                    />
                    <span className="fa fa-eye-slash absolute right-3 top-3 cursor-pointer"></span>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <label className="flex items-center text-sm text-slate-600">
                        <input type="checkbox" className="mr-2" />
                        Remember me
                    </label>
                    <a onClick={() => togglePanel('forgot')} className="text-blue-500 cursor-pointer text-sm">Forgot password?</a>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary w-full py-2 text-sm font-bold bg-blue-500 text-white rounded"
                >
                    Login
                </button>
                <div className="text-center mt-4">
                    <a onClick={() => togglePanel('signup')} className="text-blue-500 cursor-pointer text-sm">Don't have an account? Sign up</a>
                </div>
            </form>
        </div>
    );
}
