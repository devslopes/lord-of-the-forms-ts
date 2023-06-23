export const isAllNumbers = (str: string) => {
    return !str.match(/[^0-9]/);
}

export const isValidPhoneNumber = (str: string) => {
    return isAllNumbers(str) && str.length == 7
}