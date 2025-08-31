import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import mockQuestions from "../../data/mockQuestions";
import Card from "../../common/card";

export default function Main() {
  const { isLoggedIn, login, logout } = useAuth()
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    setQuestions(mockQuestions)
  }, [])

  const handleSubmi = (e) => {
    e.peventDefault();
    const from = e.target;

    const newQuestion = {
      id: questions.length + 1,
      question: from.question.value,
      body: from.body.value,
      tags: from.tags.value.split(',').map((tag) => tag.trim()),
    }
  }

  return (
    <>


      {questions.map((question) => (
        <Card key={question.id} {...question} />
      ))

      }

      {isLoggedIn && (


        <form action="" class="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-4">
          <div>
            <label for="title" class="block text-sm font-medium text-gray-700">Question Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter your question title"
              required
              class="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label for="description" class="block text-sm font-medium text-gray-700">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Enter question details"
              required
              class="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label for="tags" class="block text-sm font-medium text-gray-700">Tags:</label>
            <input
              type="text"
              id="tags"
              name="tags"
              placeholder="e.g., javascript, html"
              required
              class="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            class="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition">
            Add Question
          </button>
        </form>

      )}
    </>
  );
}
// return (
//     <>
//         <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-10 space-y-10">
//             <h1 className="text-3xl font-bold text-gray-800">Welcome to StackOverflow Clone</h1>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">

//                 {/* Login Box */}
//                 <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
//                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
//                     <form className="space-y-4">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">Email</label>
//                             <input
//                                 type="email"
//                                 placeholder="Enter your email"
//                                 className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">Password</label>
//                             <input
//                                 type="password"
//                                 placeholder="••••••••"
//                                 className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
//                             />
//                         </div>
//                         <button
//                             type="submit"
//                             className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
//                         >
//                             Login
//                         </button>
//                     </form>
//                 </div>

//                 {/* Register Box */}
//                 <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
//                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign Up</h2>
//                     <form className="space-y-4">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">Full Name</label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter your full name"
//                                 className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">Email</label>
//                             <input
//                                 type="email"
//                                 placeholder="Enter your email"
//                                 className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">Password</label>
//                             <input
//                                 type="password"
//                                 placeholder="Create a strong password"
//                                 className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
//                             />
//                         </div>
//                         <button
//                             type="submit"
//                             className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
//                         >
//                             Register
//                         </button>
//                     </form>
//                 </div>

//             </div>
//         </main>



//     </>
// );
