import React from "react";

// 'status' can be 'happy' or 'sad', which changes banner color
function Banner({ status, children }) {
  return <div className={`${status} banner`}>{children}</div>;
}

export default Banner;
