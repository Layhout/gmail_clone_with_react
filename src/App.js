import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EmailList from './components/EmailList';
import Header from './components/Header';
import Login from './components/Login';
import Mail from './components/Mail';
import SendMail from './components/SendMail';
import SideBar from './components/SideBar';
import { auth } from './fb/firebase';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        // the user is logged in
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    })
  }, [dispatch])

  return (
    !user ? <Login /> : <div className="App">
      <BrowserRouter>
        <Header />
        <div className="app_body">
          <SideBar />
          <Switch>
            <Route path="/" exact>
              <EmailList />
            </Route>
            <Route path="/mail">
              <Mail />
            </Route>
          </Switch>
        </div>
        {sendMessageIsOpen && <SendMail />}
      </BrowserRouter>
    </div>
  );
}

export default App;
