"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
const loginSchema = z.object({
    email: z.email("Invalid email address"),
    password: z.string("Password is required")
    .min(6, "Password must be at least 6 characters")
});
type LoginFormData = z.infer<typeof loginSchema>;
export default function LoginForm() {
    const { 
        register, handleSubmit, formState: { errors, isSubmitting } 
    } 
        = useForm<LoginFormData>(
            {
            resolver: zodResolver(loginSchema),
            defaultValues: {
                email: "default@example.com",
                password: ""
            }
        }
    );

    return (
        <div></div>
    );
}