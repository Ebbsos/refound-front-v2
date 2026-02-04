import { Box } from "@mui/material";
import type { FormikProps } from "formik";

interface Props {
  children: React.ReactNode;
  subtitle?: string;
  imageSrc?: string;
  formik: FormikProps<any>;
}

export const FormContainer = ({
  children,
  subtitle,
  imageSrc,
  formik,
}: Props) => {
  return (
    <form onSubmit={formik.handleSubmit} className="form_container">
      {subtitle && (
        <div className="title_container">
          <span className="subtitle">{subtitle}</span>
        </div>
      )}

      {imageSrc && (
        <Box
          component="img"
          src={imageSrc}
          alt="logo"
          sx={{
            maxWidth: "45%",
            mb: "8%",
            mx: "auto",
            display: "block",
          }}
        />
      )}

      {children}
    </form>
  );
};
