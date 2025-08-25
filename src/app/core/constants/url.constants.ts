const APPURL = '';
export const AppUrl = {
  Auth: {
    login: `${APPURL}/auth/login`,
    register: `${APPURL}/auth/register`,
  },
  Dashboard: `${APPURL}/dashboard`,
  Users: {
    main: `${APPURL}/users/list`,
    create: `${APPURL}/users/form`,
    update: (id: number) => `${APPURL}/users/${id}/update`,
  },
  Profile: `${APPURL}/profile`,
  Accounts: {
    main: `${APPURL}/accounts`,
  },
};
