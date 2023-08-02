import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '@app/Dashboard/Dashboard';
import { Support } from '@app/Support/Support';
import { GeneralSettings } from '@app/Settings/General/GeneralSettings';
import { ProfileSettings } from '@app/Settings/Profile/ProfileSettings';
import { NotFound } from '@app/NotFound/NotFound';

const routes = [
  {
    label: 'Dashboard',
    path: '/',
  },
  {
    label: 'Support',
    path: '/support',
  },
  {
    label: 'Settings',
    routes: [
      {
        label: 'General',
        path: '/settings/general',
      },
      {
        label: 'Profile',
        path: '/settings/profile',
      },
    ],
  },
];

const AppRoutes = (): React.ReactElement => (
  <Routes>
    <Route path={'/'} element={<Dashboard />} />;
    <Route path={'/support'} element={<Support />} />;
    <Route path={'/settings/general'} element={<GeneralSettings />} />;
    <Route path={'/settings/profile'} element={<ProfileSettings />} />;
    <Route path={'*'} element={NotFound} />;
  </Routes>
);

export { AppRoutes, routes };
