export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

                {/* Footer Text */}
                <p className="text-sm text-center md:text-left">
                    &copy; {new Date().getFullYear()} Aryan College. All rights reserved.
                </p>

                {/* Footer Links */}
                <div className="mt-4 md:mt-0 space-x-4 text-sm">
                    <a href="#" className="hover:underline hover:text-orange-400">Privacy Policy</a>
                    <a href="#" className="hover:underline hover:text-orange-400">Terms</a>
                    <a href="#" className="hover:underline hover:text-orange-400">Contact</a>
                </div>

            </div>
        </footer>



    );
}