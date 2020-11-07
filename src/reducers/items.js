const initialState = {
  authError: null,
  passForget: false,
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return (
        {
          ...state,
          authError: "Login Failed",
        }, // eslint-disable-next-line
        toast("Login Failed, check your data", {
          type: "error",
          autoclose: 3000,
        })
      );

    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null,
      };

    case "LOGOUT_SUCCESS":
      console.log("LOGOUT success");
      return state;

    case "FORGETON_SUCCESS":
      console.log("FORGET success");
      return {
        ...state,
        passForget: true,
      };

    case "FORGETOFF_SUCCESS":
      console.log("FORGET BACK success");
      return {
        ...state,
        passForget: false,
      };

    case "REPASS_SUCCESS":
      console.log("repass success");
      return (
        {
          ...state,
          passForget: false,
        }, // eslint-disable-next-line
        toast("Please check your email. Spam too", {
          type: "success",
          autoclose: 3000,
        })
      );

    case "REPASS_ERROR":
      console.log("repass error");
      return (
        {
          ...state,
          authError: "Login Failed",
        }, // eslint-disable-next-line
        toast("Email not found!", {
          type: "error",
          autoclose: 3000,
        })
      );

    default:
      return state;
  }
};

export default itemsReducer;
