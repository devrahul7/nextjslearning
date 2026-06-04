"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormData, registerSchema } from "./schema";
export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "default@example.com",
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = (data: RegisterFormData) => {
    alert(`Email: ${data.email}, Password: ${data.password}`);
  };
  return (
    <div>
      <h1>Regsiter Form with Zod Validation</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Email</p>
        <input
          type="email"
          className="border p-2 rounded"
          {...register("email")}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <p>First Name</p>
        <input
          type="text"
          className="border p-2 rounded"
          {...register("firstName")}
        />
        {errors.firstName && (
          <p className="text-red-500">{errors.firstName.message}</p>
        )}
        <p>Last Name</p>
        <input
          type="text"
          className="border p-2 rounded"
          {...register("lastName")}
        />
        {errors.lastName && (
          <p className="text-red-500">{errors.lastName.message}</p>
        )}
        <p>Username</p>
        <input
          type="text"
          className="border p-2 rounded"
          {...register("username")}
        />
        {errors.username && (
          <p className="text-red-500">{errors.username.message}</p>
        )}
        <p>Password</p>
        <input
          type="password"
          className="border p-2 rounded"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        <p>Confirm Password</p>
        <input
          type="password"
          className="border p-2 rounded"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{errors.confirmPassword.message}</p>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}