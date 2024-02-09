import * as Yup from 'yup';
interface ImageFile {
    name: string;
    type: string;
    size: number;
}

export const loginValidations = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
})

export const registerValidations = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    profileImage: Yup.string().required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    // profileImage: Yup.mixed()
    //     .test('fileFormat', 'Unsupported file format', function (value?: ImageFile) {
    //         if (!value) return true; // Allow empty values (no file selected)
    //         const supportedFormats = ['image/jpeg', 'image/png']; // Add more if needed
    //         return value && supportedFormats.includes(value.type);
    //     })
    //     .required('Image is required'),
})