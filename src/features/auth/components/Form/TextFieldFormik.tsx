import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { FormControl, TextField } from "@mui/material";
import { useState } from "react";

interface Props {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  formik: any;
  disabled?: boolean;
}

export const TextFieldFormik = ({
  name,
  type,
  label,
  placeholder,
  formik,
  disabled,
}: Props) => {
  const [passType, setPassType] = useState<"password" | "text">("password");

  const togglePassword = () => {
    setPassType((p) => (p === "password" ? "text" : "password"));
  };

  return (
    <FormControl className="input_container">
      <TextField
        label={label}
        type={type === "password" ? passType : type}
        {...formik.getFieldProps(name)}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        helperText={formik.touched[name] && formik.errors[name]}
        placeholder={placeholder}
        disabled={disabled}
        fullWidth
        InputLabelProps={{ shrink: true }}
        sx={{
          marginTop: "3%",
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#0b0f0a",
            color: "#e5f7ff",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--primary-color)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--secondary-color)",
          },
          "& .MuiInputLabel-root": {
            color: "var(--primary-color)",
          },
        }}
        InputProps={{
          endAdornment:
            type === "password" ? (
              <span onClick={togglePassword} style={{ cursor: "pointer" }}>
                {passType === "password" ? (
                  <VisibilityIcon />
                ) : (
                  <VisibilityOffIcon />
                )}
              </span>
            ) : undefined,
        }}
      />
    </FormControl>
  );
};
