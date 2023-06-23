import { ChangeEventHandler, Component, createRef } from "react";
import { isAllNumbers } from "../validations";
import { ErrorMessage } from "../ErrorMessage";

export type PhoneNumberState = [string, string, string, string];

type PhoneNumberInputProps = {
  phoneNumberInput: PhoneNumberState;
  setPhoneNumberInput: (input: PhoneNumberState) => void;
  shouldShowError: boolean;
  errorMessage: string;
};

export class ClassTelephoneInput extends Component<PhoneNumberInputProps> {
  phoneNumberInput0RefRef = createRef<HTMLInputElement>();
  phoneNumberInput1RefRef = createRef<HTMLInputElement>();
  phoneNumberInput2RefRef = createRef<HTMLInputElement>();
  phoneNumberInput3RefRef = createRef<HTMLInputElement>();

  render() {
    const maxLengths = [2, 2, 2, 1];

    const phoneNumberRefs = [
      this.phoneNumberInput0RefRef,
      this.phoneNumberInput1RefRef,
      this.phoneNumberInput2RefRef,
      this.phoneNumberInput3RefRef,
    ];

    const handlePhoneNumberInput =
      (phoneNumberIndex: 0 | 1 | 2 | 3): ChangeEventHandler<HTMLInputElement> =>
      (e) => {
        const newValue = e.target.value;
        const nextRef = phoneNumberRefs[phoneNumberIndex + 1];
        const prevRef = phoneNumberRefs[phoneNumberIndex - 1];

        const maxLength = maxLengths[phoneNumberIndex];
        const shouldGotoNextFocus =
          phoneNumberIndex < 3 && newValue.length === maxLength;
        const shouldGotoPrevFocus =
          phoneNumberIndex > 0 && newValue.length === 0;

        if (!isAllNumbers(newValue)) return;

        if (newValue.length > maxLength) {
          return;
        }

        this.props.setPhoneNumberInput(
          this.props.phoneNumberInput.map((n, index) =>
            phoneNumberIndex === index ? newValue : n
          ) as PhoneNumberState
        );

        if (shouldGotoNextFocus) {
          nextRef.current?.focus();
        }
        if (shouldGotoPrevFocus) {
          prevRef.current?.focus();
        }
      };
    return (
      <>
        <div className="input-wrap">
          <label htmlFor="phone">Phone:</label>
          <div id="phone-input-wrap">
            <input
              type="text"
              id="phone-input-1"
              ref={this.phoneNumberInput0RefRef}
              onChange={handlePhoneNumberInput(0)}
              value={this.props.phoneNumberInput[0]}
              placeholder="55"
            />
            -
            <input
              type="text"
              id="phone-input-2"
              ref={this.phoneNumberInput1RefRef}
              onChange={handlePhoneNumberInput(1)}
              value={this.props.phoneNumberInput[1]}
              placeholder="55"
            />
            -
            <input
              type="text"
              id="phone-input-3"
              ref={this.phoneNumberInput2RefRef}
              onChange={handlePhoneNumberInput(2)}
              value={this.props.phoneNumberInput[2]}
              placeholder="55"
            />
            -
            <input
              type="text"
              id="phone-input-4"
              ref={this.phoneNumberInput3RefRef}
              onChange={handlePhoneNumberInput(3)}
              value={this.props.phoneNumberInput[3]}
              placeholder="5"
            />
          </div>
        </div>
        <ErrorMessage
          message={this.props.errorMessage}
          show={this.props.shouldShowError}
        />
      </>
    );
  }
}
