import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Dashboard',
    icon: 'monitor-outline',
    link: '/admin/dashboard',
    home: true
  },
  {
    title: 'Users ',
    icon: 'person-add-outline',
    children: [
      {
        title: 'User List',
        link: '/admin/users',
      },
    ]
  },
  {
    title: 'Information ',
    icon: 'book-open-outline',
    children: [
      {
        title: 'Information List',
        link: '/admin/information',
      },
    ]
  },


  // {
  //   title: 'Rooms ',
  //   icon: 'clipboard-outline',
  //   children: [
  //     {
  //       title: 'Rooms List',
  //       link: '/admin/rooms',
  //     },
  //   ]
  // },
  // {
  //   title: 'Inventory ',
  //   icon: 'checkmark-square-2-outline',
  //   children: [
  //     {
  //       title: 'Inventory List',
  //       link: '/admin/inventory',
  //     },
  //   ]
  // },


];

