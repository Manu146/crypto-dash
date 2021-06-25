import { useState } from "react";
export default function useFormValidation({
  dataObject,
  validations,
  onSubmit,
}) {
  const [errors, setErrors] = useState({});
  const handleSubmit = async () => {
    if (validations && Object.keys(validations).length > 0) {
      let valid = true;
      let newErrors = {};
      for (const key in validations) {
        let value = dataObject[key];
        let validation = validations[key];

        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[key] = validation?.required?.message;
        }

        let pattern = validation?.pattern;

        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern?.message;
        }

        let custom = validation?.custom;

        if (
          custom?.isValid &&
          typeof custom.isValid === "function" &&
          !isValid(value)
        ) {
          valid = false;
          newErrors[key] = custom?.message;
        }

        if (!valid) {
          setErrors(newErrors);
          return;
        }

        setErrors({});

        typeof onSubmit === "function" && onSubmit();
      }
    }
  };
  return { handleSubmit, errors };
}
