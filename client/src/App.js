import React,{lazy} from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ProtectedRoute from './components/auth/ProtectedRoute'

const Home = lazy(()=>import('./pages/Home'))
const Login = lazy(()=>import('./pages/Login'))
const Chat = lazy(()=>import('./pages/Chat'))
const Groups = lazy(()=>import('./pages/Groups'))
const NotFound = lazy(()=>import('./pages/NotFound'))

const App = () => {

  let user = 1;

  return (
      <Router>
        <Routes>
          <Route element={<ProtectedRoute user={user}/>}>
            {/* if no user => cant access these */}
            <Route path="/" element={<Home/>}/>
            <Route path="/chat/:chatId" element={<Chat/>}/>
            <Route path="/groups" element={<Groups/>}/>
          </Route>
          <Route element={<ProtectedRoute user={!user} redirect='/'/>}>
            {/* if user present => cant access these */}
            <Route path="/login" element={<Login/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
  )
}

export default App