

export const validateName = (name: string) => {
    // Name must be at least 3 characters long and contain only letters
    const regex = /^[A-Za-z]{3,}$/;
    return regex.test(name)
};

export const validatePassword = (password: string) => {

    // Password must be at least 6 characters long and contain at least one number and one special character
    const lengthOk = password.length >= 6;
    const hasUpper = /[A-Z]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);

    return lengthOk && hasUpper && hasSpecial;
}

export const validateEmail = (email: string) => {
    // Simple email regex validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}