import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Grid } from "@mui/material";
import { useAuth } from "../hooks";
import logo from "/NewZoneImportados01.png";
import { FormContainer } from "./Form/FormContainer";
import { TextFieldFormik } from "./Form/TextFieldFormik";
import { toastError } from "../../../shared/mySwal";

export const LoginForm = () => {
  const { login, loading, error } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Email inválido").required("Requerido"),
      password: Yup.string().required("Requerido"),
    }),
    onSubmit: async (values) => {
      const result = await login(values.email, values.password);
      if (result.meta.requestStatus === "rejected") {
        toastError("Credenciales inválidas");
      }
    },
  });

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid sx={{xs:11, sm:8, md:5, lg:4}}>
        <FormContainer formik={formik} imageSrc={logo}>
          <>
            <TextFieldFormik
              name="email"
              type="email"
              label="Correo"
              placeholder="correo@email.com"
              formik={formik}
            />

            <TextFieldFormik
            
              name="password"
              type="password"
              label="Contraseña"
              placeholder="********"
              formik={formik}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                mt: 3,
                backgroundColor: "var(--primary-color)",
                color: "#000",
                "&:hover": {
                  backgroundColor: "var(--secondary-color)",
                },
              }}
            >
              Iniciar sesión
            </Button>
          </>
        </FormContainer>
      </Grid>
    </Grid>
  );
};
