import { ComponentProps } from "react";
import { ErrorMessage } from "./ErrorMessage";

export const TextInput = ({
  inputProps,
  label,
  errorMessage,
  shouldShowError,
}: {
  inputProps: ComponentProps<"input">;
  label: string;
  shouldShowError: boolean;
  errorMessage: string;
}) => {
  return (
    <>
      <div className="input-wrap">
        <label htmlFor="firstName">{label}:</label>
        <input {...inputProps} type="text" />
      </div>
      <ErrorMessage message={errorMessage} show={shouldShowError} />
    </>
  );
};
