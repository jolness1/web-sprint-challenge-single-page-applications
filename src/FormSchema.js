import * as yup from "yup";


export default yup.object().shape({
    name: yup
        .string()
        .required("Name is required")
        .min(2, "Name must be 2 chars long"),
    size: yup
        .string()
        .oneOf(["child", "small", "medium", "large"], "Crust size is required"),
    // we are done with checkboxes
    pineapple: yup.boolean(),
    pepperoni: yup.boolean(),
    onions: yup.boolean(),
    sausage: yup.boolean(),
    instruction: yup
        .string()
});