

export const formatPhoneNumber = (phoneNumber: string) =>
    `${phoneNumber.slice(0, 2)}-${phoneNumber.slice(2, 4)}-${phoneNumber.slice(4, 6)}-${phoneNumber.slice(6, 7)}`;

export const capitalize = (input: string) =>
    input
        .split("")
        .map((char, index) =>
            index === 0 ? char.toUpperCase() : char.toLowerCase()
        )
        .join("");