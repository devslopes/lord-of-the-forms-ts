import { useState } from "react";
import { isEmailValid } from "../utils/validations";
import { TextInput } from "../TextInput";
import {
  PhoneNumberState,
  FunctionalPhoneInput,
} from "./FunctionalTelephoneInput";
import { UserInformation } from "../types";
import { isCityValid } from "../utils/all-cities";
import { isValidPhoneNumber } from "../validations";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export const FunctionalForm = ({
  handleUserInformation,
}: {
  handleUserInformation: (newUserData: UserInformation) => void;
}) => {
  const [phoneNumberInput, setPhoneNumberInput] = useState<PhoneNumberState>([
    "",
    "",
    "",
    "",
  ]);
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const reset = () => {
    setFirstNameInput("");
    setLastNameInput("");
    setEmailInput("");
    setCityInput("");
    setPhoneNumberInput(["", "", "", ""]);
    setIsSubmitted(false);
  };

  const isFirstNameInputValid = firstNameInput.length >= 2;
  const isLastNameInputValid = lastNameInput.length >= 2;
  const isEmailInputValid = isEmailValid(emailInput);
  const isCityInputValid = isCityValid(cityInput);

  const isPhoneNumberValid = isValidPhoneNumber(phoneNumberInput.join(""));

  const onSubmit = () => {
    setIsSubmitted(true);
    if (
      [
        isFirstNameInputValid,
        isLastNameInputValid,
        isEmailInputValid,
        isCityInputValid,
        isPhoneNumberValid,
      ].some((validation) => !validation)
    ) {
      alert("bad data input");
      return;
    }

    handleUserInformation({
      email: emailInput,
      firstName: firstNameInput,
      lastName: lastNameInput,
      phone: phoneNumberInput.join(""),
      state: cityInput,
    });
    reset();
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <u>
        <h3>User Information Form</h3>
      </u>
      <TextInput
        label="First Name"
        inputProps={{
          placeholder: "Bilbo",
          value: firstNameInput,
          onChange: (e) => {
            setFirstNameInput(e.target.value);
          },
        }}
        shouldShowError={isSubmitted && !isFirstNameInputValid}
        errorMessage={firstNameErrorMessage}
      />
      <TextInput
        label="Last Name"
        inputProps={{
          placeholder: "Baggins",
          value: lastNameInput,
          onChange: (e) => {
            setLastNameInput(e.target.value);
          },
        }}
        shouldShowError={isSubmitted && !isLastNameInputValid}
        errorMessage={lastNameErrorMessage}
      />
      <TextInput
        label="Email"
        inputProps={{
          placeholder: "bilbo@hobbiton-adventures.com",
          value: emailInput,
          onChange: (e) => {
            setEmailInput(e.target.value);
          },
          autoComplete: "on",
        }}
        shouldShowError={isSubmitted && !isEmailInputValid}
        errorMessage={emailErrorMessage}
      />

      <TextInput
        inputProps={{
          placeholder: "Hobbiton",
          value: cityInput,
          onChange: (e) => {
            setCityInput(e.target.value);
          },
          list: "cities",
        }}
        errorMessage={cityErrorMessage}
        shouldShowError={isSubmitted && !isCityInputValid}
        label="City"
      />
      <FunctionalPhoneInput
        errorMessage={phoneNumberErrorMessage}
        shouldShowError={isSubmitted && !isPhoneNumberValid}
        phoneNumberInput={phoneNumberInput}
        setPhoneNumberInput={setPhoneNumberInput}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
