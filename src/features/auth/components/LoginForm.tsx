import { useFormik } from "formik";
import { useAuth } from "../hooks";
import * as Yup from "yup";
import { Button, Grid } from "@mui/material";

export const LoginForm = () => {
  const { login, loading } = useAuth();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().required(),
      password: Yup.string().required(),
    }),
    onSubmit: (values) => {
      login(values.email, values.password);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid sx={{ xs: 12 }}>
          <input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid sx={{ xs: 12 }}>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </Grid>
        <Button type="submit" disabled={loading} sx={{ mt: 2 }}>
          Iniciar sesión
        </Button>
      </Grid>
    </form>
  );
};
