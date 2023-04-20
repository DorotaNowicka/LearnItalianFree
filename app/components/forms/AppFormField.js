import React from "react";
import { useFormikContext } from "formik";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "../forms/ErrorMessage";

function AppFormField({ name, ...otherProps }) {
  const {
    setFieldTouched,
    handleChange,
    errors,
    touched,
    width
  } = useFormikContext();
  return (
    <>
      <AppTextInput
        //   icon="email"
        //   autoCapitalize="none"
        //   autoCorrecr={false}
        //   placeholder="Email"
        //  keyboardType="email-address"
        //    textContentType="emailAddress"
        width={width}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default AppFormField;
