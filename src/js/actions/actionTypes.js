export default {
  // app lifecycle
  APP_LOAD: 'APP_LOAD',
  ASYNC_START: 'ASYNC_START',
  ASYNC_END: 'ASYNC_END',
  REDIRECT: 'REDIRECT',
  SET_PAGE: 'SET_PAGE',

  // auth
  LOGIN: 'LOGIN',
  LOGIN_SAML: 'LOGIN_SAML',
  LOGOUT: 'LOGOUT',
  REGISTER: 'REGISTER',
  PASSWORD_RESET: 'PASSWORD_RESET',
  PASSWORD_RESET_REQUEST: 'PASSWORD_RESET_REQUEST',

  // order sim card
  ORDER_CREATE: 'ORDER_CREATE',
  SET_GLOBAL_ORDER: 'SET_GLOBAL_ORDER',

  SET_GLOBAL_ENERGY_PLANS_PRICING: 'SET_GLOBAL_ENERGY_PLANS_PRICING',

  ENERGY_SIGNUP: 'ENERGY_SIGNUP',

  // order activation
  ORDER_ACTIVATE: 'ORDER_ACTIVATE',
  SET_GLOBAL_ACTIVATE: 'SET_GLOBAL_ACTIVATE',
  VALIDATE_SIM_NUMBER: 'VALIDATE_SIM_NUMBER',
  ACTIVATE_PENDING_SERVICE: 'ACTIVATE_PENDING_SERVICE',

  ORDER_ADD_SERVICE: 'ORDER_ADD_SERVICE',
  SET_GLOBAL_ADD_SERVICE: 'SET_GLOBAL_ADD_SERVICE',

  // order nbn
  SET_GLOBAL_NBN_ORDER: 'SET_GLOBAL_NBN_ORDER',
  NBN_ORDER_CREATE: 'NBN_ORDER_CREATE',

  // account actions
  ACCOUNT_SERVICES_GET: 'ACCOUNT_SERVICES_GET',
  DASHBOARD_PAGE_LOADED: 'DASHBOARD_PAGE_LOADED',
  ACCOUNT_UPDATE_DETAILS: 'ACCOUNT_UPDATE_DETAILS',
  SERVICE_OVERVIEW_PAGE_LOADED: 'SERVICE_OVERVIEW_PAGE_LOADED',
  PAYMENT_DETAILS_UPDATE: 'PAYMENT_DETAILS_UPDATE',
  ACCOUNT_PAYMENT_EDIT_LOADED: 'ACCOUNT_PAYMENT_EDIT_LOADED',

  MEMBER_DISCOUNTS_PAGE_LOADED: 'MEMBER_DISCOUNTS_PAGE_LOADED',

  PAYMENT_HISTORY_PAGE_LOADED: 'PAYMENT_HISTORY_PAGE_LOADED',

  // service actions
  UPDATE_SERVICE_DETAILS: 'UPDATE_SERVICE_DETAILS',

  // temp
  HOME_PAGE_LOADED: 'HOME_PAGE_LOADED',
  HOME_PAGE_UNLOADED: 'HOME_PAGE_UNLOADED',
  PROFILE_PAGE_LOADED: 'PROFILE_PAGE_LOADED',
  PROFILE_PAGE_UNLOADED: 'PROFILE_PAGE_UNLOADED',
  LOGIN_PAGE_UNLOADED: 'LOGIN_PAGE_UNLOADED',
  REGISTER_PAGE_UNLOADED: 'REGISTER_PAGE_UNLOADED'
};
