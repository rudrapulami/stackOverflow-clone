export default function Header() {
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
                    <h1 className="text-xl font-bold text-gray-800">StackOverflow Clone</h1>
                </div>

                {/* Search Bar */}
                <div className="w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>
            </div>
        </header>


    );
}