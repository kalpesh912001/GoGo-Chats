import { View, Text, StatusBar, KeyboardAvoidingView, TextInput, Button, Pressable } from 'react-native'
import React from 'react';
import { Formik } from 'formik';
import Input from '../../components/Input/Input';
import { loginInitials } from '../../utils/formikInitials';
import { loginValidations } from '../../utils/formikValidations';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    return (
        <View style={{ marginTop: StatusBar.currentHeight, backgroundColor: '#f2f2f2' }}>
            <KeyboardAvoidingView style={{ alignItems: 'center', gap: 40 }}>
                <View style={{ marginTop: 70, rowGap: 20, alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: '#4A55A2', fontWeight: '600' }}>Sign In</Text>
                    <Text style={{ fontSize: 18, color: '#333333', fontWeight: '400' }}>Sign In To Your Account</Text>
                </View>
                <View style={{ marginTop: 20, width: '85%' }}>
                    <Formik
                        initialValues={loginInitials}
                        validationSchema={loginValidations}
                        onSubmit={(values) => {
                            console.log(values);

                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <View style={{ height: 'auto', gap: 10 }}>
                                <Input
                                    placeholder='Email'
                                    inputStyle={{ backgroundColor: '#d9d9d9', paddingHorizontal: 14, paddingVertical: 10, fontSize: 16, borderRadius: 6 }}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    error={(touched.email && errors.email) && errors.email}
                                />
                                <Input
                                    placeholder='Password'
                                    inputStyle={{ backgroundColor: '#d9d9d9', paddingHorizontal: 14, paddingVertical: 10, fontSize: 16, borderRadius: 6 }}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    error={(touched.password && errors.password) && errors.password}
                                    secureTextEntry
                                />
                                <View style={{ gap: 8 }}>
                                    <Pressable
                                        onPress={() => handleSubmit()}
                                        style={{ backgroundColor: '#4A55A2', paddingHorizontal: 14, paddingVertical: 12, borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: 'white', fontWeight: '600', fontSize: 18 }}>Login</Text>
                                    </Pressable>
                                    <Pressable onPress={() => navigation.navigate('register' as never)}>
                                        <Text style={{ fontSize: 16, color: '#333333', fontWeight: '400', textAlign: 'center' }}>Don't have an account? <Text style={{ color: '#4A55A2', fontWeight: '600' }}>Sign Up</Text></Text>
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

export default Login;