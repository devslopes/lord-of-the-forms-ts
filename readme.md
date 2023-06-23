# Lord of the Forms

You work for a SAAS company in middle earth and your task is to build a form where you can submit your information about your:

- First Name
- Last Name
- City
- Email
- Phone Number (in a proper middle-earth format XX-XX-XX-X )

For this assignment we want to a make an extremely user friendly UI where we can accomplish the following things.

- Making it as easy as possible to fill out the correct data
- Everything should look pretty
- Input Validation Errors are rendered to the user

We are going to build out a form that's purpose is to gather and set the `userInformation` of the parent component.

## Learning Objectives

In order to complete this assignment, a student should be able to...

- create an advanced controlled form
- use onChange events to track the state of an input
- use onSubmit events to trigger the submit of a form
- use `e.preventDefault` to stop the default event of an `onSubmit`
- be able to prevent typing certain characters by controlling the onChange event
- use a ref in react in order to switch focus between elements on change (Telephone Input)
- render client-side validation errors in react underneath the inputs
- cleanly abstract validations
- create a useful user-friendly UI for form submission
- use onSubmit to cleanly trigger a change in state of a parent component

## Setup

To get this project setup, you should:

- Run `npm i` to install all dependencies
- Run `npm run dev` to run the project

## In order to pass this assignment you should

### Standard Requirements

- [ ] Setup eslint
- [ ] Pass all linting checks

- To check if linting passes, run `npm run lint`

- [ ] Format code with prettier
- [ ] State should not be duplicated
- [ ] Variables should be named logically
- [ ] No unnecessary console logs
- [ ] No commented out blocks of code (Code comments are fine)
- [ ] Setup a github repository with your submission as the `main` branch, you will submit a link to this for grading (NOT A ZIP FILE)

### Typescript Specific Requirements

- [ ] pass **ALL** type-checks
  - Check by running `npm run typecheck`
- [ ] DON'T USE `any`.... OR ELSE
- [ ] Keep your types clean and in a logical location
- [ ] Prop Types for components should be collocated with their components
- [ ] Shared types should live in a file that says `types` somewhere in it's name
  - [ ] example: `types.ts` should work fine
- [ ] Unshared types should live in the component they are used in

### Assignment Specific Requirements

- [ ] Get your code to function EXACTLY like [This Site](https://lord-of-the-forms.vercel.app/)
- [ ] Under input errors should not show UNLESS the user has already tried submitting once
- [ ] Errors should go away as soon as the field is fixed, not on submit
- [ ] If a user tries to submit a form with bad inputs, an alert message will say "Bad Inputs" then the exact errors will pop up under the incorrect inputs
- [ ] When a user successfully submits the form, it should update the userInformation and show the user information in the ProfileInformation Component
- [ ] In middle earth, phone numbers are of the format `NN-NN-NN-N` where each `N` represents any digit 0-9
- [ ] A User cannot type any non-numeric characters into a telephone input
- [ ] A submitted city must
  - [ ] Be in the list of `allCites` found in `all-cities.ts`
  - [ ] Does NOT have to be the same case, if you type in a valid city with different typing, this should be a VALID input
- [ ] Create a `FunctionalTextInput` component to clean up code
- [ ] Create a `FunctionalPhoneInput` component to clean up code
- [ ] Create a `ClassTextInput` component to clean up code
- [ ] Create a `ClassPhoneInput` component to clean up code
- [ ] Page must NOT reload after submitting
- [ ] ClassApp Code and FunctionalApp Code should be treated as separate apps as far as state goes
