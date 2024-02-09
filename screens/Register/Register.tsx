import { View, Text, StatusBar, KeyboardAvoidingView, TextInput, Button, Pressable } from 'react-native'
import React, { useState } from 'react';
import { Formik, FormikProps } from 'formik';
import Input from '../../components/Input/Input';
import { loginInitials, registerInitials } from '../../utils/formikInitials';
import { loginValidations, registerValidations } from '../../utils/formikValidations';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { Entypo, Feather, AntDesign } from '@expo/vector-icons';
// import * as ImagePicker from 'react-native-image-picker';
// import { launchImageLibrary } from 'react-native-image-picker';


const Register = () => {
    const navigation = useNavigation();
    const [image, setImage] = useState(null);
    const [showpassword, setShowPassword] = useState(true);
    const [showImageError, setShowImageError] = useState(false);

    const pickImage = async () => {
        setShowImageError(false);
        // No permissions request is necessary for launching the image library
        let result: any = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        debugger
        console.log("image:", result);

        if (!result.canceled) {
            setImage(result.assets[0]);
        }
    };

    // const handleImagePicker = () => {
    //     let options: any = {
    //         mediaType: 'photo',
    //         storageOptions: {
    //             path: 'images',
    //         },
    //     };

    //     launchImageLibrary(options, (response) => {
    //         console.log((response));

    //         setImage({ uri: response.assets[0] });
    //         // if (response.didCancel) {
    //         //     console.log('User cancelled image picker');
    //         // } else if (response.errorMessage) {
    //         //     console.log('ImagePicker Error: ', response.errorMessage);
    //         // } else {
    //         //     // Update the state with the selected image source
    //         //     setImage({ uri: response.assets[0] });
    //         // }
    //     });
    // };


    return (
        <View style={{ marginTop: StatusBar.currentHeight, backgroundColor: '#f2f2f2' }}>
            <KeyboardAvoidingView style={{ alignItems: 'center', gap: 40 }}>
                <View style={{ marginTop: 70, rowGap: 20, alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: '#4A55A2', fontWeight: '600' }}>Sign Up</Text>
                    <Text style={{ fontSize: 18, color: '#333333', fontWeight: '400' }}>Create Your new Account</Text>
                </View>
                <View style={{ marginTop: 20, width: '85%' }}>
                    <Formik
                        initialValues={registerInitials}
                        validationSchema={registerValidations}
                        onSubmit={(values) => {
                            if (image === null) {
                                return setShowImageError(true);
                            }
                            console.log(values);

                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <View style={{ height: 'auto', gap: 10 }}>
                                <Input
                                    placeholder='Username'
                                    inputStyle={{ backgroundColor: '#d9d9d9', paddingHorizontal: 14, paddingVertical: 10, fontSize: 16, borderRadius: 6 }}
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    value={values.username}
                                    error={(touched.username && errors.username) && errors.username}
                                />
                                <Input
                                    placeholder='Email'
                                    inputStyle={{ backgroundColor: '#d9d9d9', paddingHorizontal: 14, paddingVertical: 10, fontSize: 16, borderRadius: 6 }}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    error={(touched.email && errors.email) && errors.email}
                                />
                                <View style={{ position: 'relative' }}>
                                    <Input
                                        placeholder='Password'
                                        inputStyle={{ backgroundColor: '#d9d9d9', paddingHorizontal: 14, paddingVertical: 10, fontSize: 16, borderRadius: 6 }}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        error={(touched.password && errors.password) && errors.password}
                                        secureTextEntry={showpassword}
                                    />
                                    {
                                        !showpassword ?
                                            <Feather
                                                name="eye"
                                                size={24}
                                                color="#333333"
                                                style={{
                                                    position: 'absolute',
                                                    right: 12,
                                                    top: 12
                                                }}
                                                onPress={() => setShowPassword(!showpassword)}
                                            />
                                            :
                                            <Feather
                                                name="eye-off"
                                                size={24}
                                                color="#333333"
                                                style={{
                                                    position: 'absolute',
                                                    right: 12,
                                                    top: 12
                                                }}
                                                onPress={() => setShowPassword(!showpassword)}
                                            />
                                    }

                                </View>
                                {/* {
                                    image === null ?
                                        <View style={{ marginBottom: 25, gap: 10 }}>
                                            <Pressable
                                                onPress={pickImage}
                                                style={{ backgroundColor: '#f2f2f2', borderColor: '#4A55A2', borderWidth: 1, paddingHorizontal: 14, paddingVertical: 12, borderRadius: 6, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 }}
                                            >
                                                <Text style={{ color: '#999999', fontWeight: '600' }}>Pick Profile Picture</Text>
                                                <Entypo name="image" size={24} color="#b3b3b3" />
                                            </Pressable>
                                            {
                                                (showImageError && (image === null)) &&
                                                <Text style={{ color: '#FF0000', fontSize: 14, marginBottom: 10 }}>Image is required</Text>
                                            }
                                        </View>
                                        :
                                        <View style={{ marginBottom: 25, gap: 10, backgroundColor: '#f2f2f2', borderColor: '#4A55A2', borderWidth: 1, paddingHorizontal: 14, paddingVertical: 12, borderRadius: 6, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                            <Text style={{ color: '#999999', fontWeight: '600' }}>Selected</Text>
                                            <AntDesign name="closecircleo" size={24} color="#4A55A2" onPress={() => setImage(null)} />
                                        </View>
                                } */}
                                <Input
                                    placeholder='Image url'
                                    inputStyle={{ backgroundColor: '#d9d9d9', paddingHorizontal: 14, paddingVertical: 10, fontSize: 16, borderRadius: 6 }}
                                    onChangeText={handleChange('profileImage')}
                                    onBlur={handleBlur('profileImage')}
                                    value={values.profileImage}
                                    error={(touched.profileImage && errors.profileImage) && errors.profileImage}
                                />
                                <View style={{ gap: 8 }}>
                                    <Pressable
                                        onPress={() => handleSubmit()}
                                        style={{ backgroundColor: '#4A55A2', paddingHorizontal: 14, paddingVertical: 12, borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: 'white', fontWeight: '600', fontSize: 18 }}>Login</Text>
                                    </Pressable>
                                    <Pressable onPress={() => navigation.navigate('login' as never)}>
                                        <Text style={{ fontSize: 16, color: '#333333', fontWeight: '400', textAlign: 'center' }}>Already have an account? <Text style={{ color: '#4A55A2', fontWeight: '600' }}>Sign Up</Text></Text>
                                    </Pressable>
                                </View>
                            </View>

                        )}

                    </Formik>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

export default Register;