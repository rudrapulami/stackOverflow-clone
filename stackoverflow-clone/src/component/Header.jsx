import { useAuth } from "../context/AuthContext";

export default function Header() {
    const { isLoggedIn, login, logout} = useAuth()
    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo and Title */}
                <div className="flex items-center space-x-4">
                    <img
                        src="https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-logo.svg?v=ac8d4b7f3c0e"
                        alt="StackOverflow Logo"
                        className="h-10"
                    />
                    <h1 className="text-xl font-bold text-gray-800">
                        StackOverflow Clone
                    </h1>
                </div>

                {/* Search Bar */}
                <div className="w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

                {/* Auth Buttons
                <div className="flex items-center space-x-3">
                    <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-100">
                        Login
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600">
                        Register
                    </button>
                </div> */}

                <button
                    onClick ={isLoggedIn ? logout : login}
                    className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-100"
                >
                        {isLoggedIn ? 'logout' : 'Login'}
                </button>
            </div>
        </header>



    );
}