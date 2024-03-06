import { MenuInterface } from './interfaces/menuInterfaces';
import { LuLayoutDashboard, LuSettings, LuCalendar } from 'react-icons/lu';
export const AdminMenu: MenuInterface[] = [
  {
    icon: LuLayoutDashboard,
    link: 'dashboard',
    title: 'Dashboard',
    type: 'composed',
    subLinks: [
      {
        icon: LuLayoutDashboard,
        title: 'Home',
        link: '',
      },
      {
        icon: LuSettings,
        title: 'Configurations',
        link: 'settings',
      },
      {
        icon: LuCalendar,
        title: 'Sessions',
        link: 'sessions',
      },
    ],
  },
];
