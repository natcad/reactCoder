import { object, string, mixed } from "yup";

let userSchema = object({
  fullname: string().required('El campo nombre es requerido'),
  phone: mixed().required('El campo telefono es requerido'),
  email: string().email('El campo email no tiene el formato adecuado').required('El campo email es requerido'),
  address: string().required('El campo dirección es requerido'),
  city: string().required('El campo ciudad es requerido'),
  country: string().required('El campo país es requerido'),
  paymentMethod: mixed().required('El campo método de pago es requerido'),
});

const validateForm = async (dataForm) => {
  try {
    await userSchema.validate(dataForm);
    return { status: "success", message: "Formulario válido" };

  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export default validateForm;
