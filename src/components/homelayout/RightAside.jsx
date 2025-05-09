import React, { use } from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "./FindUs";
import QZone from "./QZone";
import { AuthContext } from "../../provider/AuthProvider";

const RightAside = () => {
  const { user } = use(AuthContext);
  return (
    <div className="space-y-8">
      {!user && <SocialLogin></SocialLogin>}
      <FindUs></FindUs>
      <QZone></QZone>
    </div>
  );
};

export default RightAside;
