import { useState } from "react";
import { ProfileInformation } from "../ProfileInformation";
import { FunctionalForm } from "./FunctionalForm";
import { UserInformation } from "../types";

// const exampleUserData = {
//   email: "jon@jon.com",
//   firstName: "jonathan",
//   lastName: "higger",
//   phone: "1234567891",
//   state: "FL",
// };

export const FunctionalApp = () => {
  const [userData, setUserData] = useState<UserInformation | null>(null);

  return (
    <>
      <h2>Functional</h2>
      <ProfileInformation userData={userData} />
      <FunctionalForm handleUserInformation={setUserData} />
    </>
  );
};
