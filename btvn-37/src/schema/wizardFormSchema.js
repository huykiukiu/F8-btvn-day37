import * as z from "zod";

export const step1Schema = z.object({
  firstName: z.string().min(2, "Tên phải có ít nhất 2 ký tự"),
  lastName: z.string().min(2, "Họ phải có ít nhất 2 ký tự"),
  age: z.coerce.number().min(1, "Tuổi bắt buộc phải nhập"),
  email: z.string().pipe(z.email("Email không hợp lệ")),
});

export const step2Schema = (firstName) =>
  z.object({
    username: z
      .string()
      .min(2, "Username phải có ít nhất 2 ký tự")
      .refine(
        (value) => value.toLowerCase().includes(firstName.toLowerCase()),
        {
          message: "Username phải chứa firtname",
        },
      ),
  });
