import { combineReducers } from "redux";
   import getYearReducer from "./getYearReducer";
   import loginReducer from "./loginReducer";

   //CBHI
import getCbhiNidDetailsReducer from "./getCbhiNidDetailsReducer";
// import changePinReducer from "./changePinReducer";
// import forgotPasswordReducer from "./forgotPasswordReducer";
// import getRnitDetailsReducer from "./getRnitDetailsReducer";
// import cbhiPayamentReducer from "./cbhiPaymentReducer";
// import transactionsReducer from "./transactionsReducer";
// import balanceReducer from "./getBalanceReducer";
             //rra
 import getDocDetailsReducer from "./getDocDetailsReducer";
 import rraPaymentReducer from "./rraPaymentReducer";
// import getLtssIdentificationDetailsReducer from "./getLtssIdentificationDetailsReducer";
// import getClientDetailsReducer from "./getClientDetailsReducer";
// import rnitPaymentReducer from "./rnitPaymentReducer";
// import chashinReducer from "./cashInReducer";
// import getClientNidDetailsReducer from "./getClientNidDetailsReducer";
//import clientEnrollmentReducer from "./clientEnrollmentReducer";
const allReducers = combineReducers({
     login:loginReducer,
    // changePin: changePinReducer,
    // forgotPassword:forgotPasswordReducer,

    //all 
    // balance:balanceReducer,
    // transactions:transactionsReducer,
     getYear:getYearReducer,

     //cbhi
     getCbhiNidDetails:getCbhiNidDetailsReducer ,
    // cbhiPayment:cbhiPayamentReducer,

     //rra
     getDocDetails: getDocDetailsReducer,
     rraPayment: rraPaymentReducer,

    //rnit
    // getRnitDetails: getRnitDetailsReducer,
    // rnitPayment:rnitPaymentReducer,

    //ltss
    // getLtssIndDetails: getLtssIdentificationDetailsReducer,

    //client
    // getClientDetails:getClientDetailsReducer,
    // cashIn:chashinReducer,
    // getClientNidDetails:getClientNidDetailsReducer,
    // clientEnrollment: clientEnrollmentReducer,
});

export default allReducers;