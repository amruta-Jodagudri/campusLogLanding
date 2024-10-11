interface ResetPasswordProps {
    togglePanel: (panel: 'login' | 'signup' | 'forgot') => void;
}

export default function ResetPassword({ togglePanel }: ResetPasswordProps) {
    return (
        <div>
            <h3 className="text-center text-xl font-bold mb-4 text-black">Recover your password</h3>
            <p className="text-center text-sm mb-4 text-slate-900">
                Fill in your e-mail address below and we will send you an email with further instructions.
            </p>
            <form name="forgetForm" className="forgetForm" action="#" method="POST">
                <div className="mb-4">
                    <input
                        type="email"
                        name="username"
                        placeholder="Username"
                        className="form-control text-sm p-3 w-full border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary w-full py-3 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Recover your password
                </button>
                <div className="text-center mt-4">
                    <a onClick={() => togglePanel('login')} className="text-blue-500 text-sm cursor-pointer">
                        Already have an account?
                    </a>
                </div>
            </form>
        </div>
    );
}
