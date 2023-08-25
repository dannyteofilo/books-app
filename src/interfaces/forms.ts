export interface FormValues {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
    address: string;
    city: string;
    state: string;
  }
  
  export interface FormErrors {
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    phoneNumber?: string;
    address?: string;
    city?: string;
    state?: string;
  }
  