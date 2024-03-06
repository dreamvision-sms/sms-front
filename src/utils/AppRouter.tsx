/** @format */

import { Routes, Route } from 'react-router-dom';
import IsAuthenticated from './Auth/IsAuthenticated';
import SignIn from '../pages/Authentication/SignIn';
import DefaultLayout from '../layout/DefaultLayout';

import DashBoard from '../components/Settings/DashBoard';
import SettingsPage from '../components/Settings/SettingsPage';
import Sessions from '../pages/Settings/Sessions';

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="" Component={SignIn} />
        <Route
          path="dashboard"
          element={
            <IsAuthenticated>
              <DefaultLayout>
                <div></div>
              </DefaultLayout>
            </IsAuthenticated>
          }
        >
          <Route index Component={DashBoard} />
          <Route path="settings" Component={SettingsPage} />
          <Route path="sessions" Component={Sessions} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
