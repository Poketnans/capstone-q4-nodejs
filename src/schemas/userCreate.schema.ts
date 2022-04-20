import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

const requiredText = "Campo obrigatório"
const userSchema = yup.object().shape({
  id : yup.string().nullable().default(()=> uuidv4()),
  name: yup.string().required(`${requiredText} name.`).max(50, "maximum characters 50 ."),
  email: yup.string().email("format invalid for email.").required(`${requiredText} email.`),
  password: yup.string().required(`${requiredText} password.`).min(6,"minimum characters 6").transform((value)=> bcrypt.hashSync(value,10) ),
  employed: yup.boolean().default(false),
  createdAt : yup.date().nullable().default(()=> new Date()),
  updatedAt : yup.date().nullable().default(()=> new Date()),
})
export default userSchema;