import React from 'react'

const Auth = (props) => {
  return (
    <div>
      <button
        onClick={props.loginHandler}
      >
        {props.isLoggedin ? "Log Out" : "Log In"}
      </button>
    </div>
  )
}

export default Auth