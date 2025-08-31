
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main/Main';
import Question from './component/Main/Question';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { useEffect } from 'react';
import { useAuth } from './context/AuthContext';


export default function App() {
  const { login, logout } =useAuth();
  useEffect(() => {
    const checkSession = () => {
      fetch('http://localhos:8000/session', {
        method: 'POST'
      }).then((response) => {
        if(response.status === 200){
          login();
        }else {
          logout();
        }
      })
    }
    checkSession();
  }, []); 

  return (
    <AuthProvider>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/questions/:id" element={<Question />} />
          <Route path='*' element={<h1 className=''>Page not found</h1>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </AuthProvider>
  );


}

//export default App;
