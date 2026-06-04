"use server";

import { register ,login } from "@/app/lib/api/auth";
import { LoginFormData, RegisterFormData } from "@/app/(auth)/_components/schema";

export const handleRegisterUser = async (data: RegisterFormData) => {
    try {
        // Sending data to the API utility
        const result = await register(data);
        
        if (result.success) {
            // Returning success state back to your UI component
            return { 
                success: true, 
                message: result.message || "Registration successful!", 
                data: result.data 
            };
        } else {
            // Returning validation or API failures back to your UI component
            return { 
                success: false, 
                message: result.message || "Registration Failed" 
            };
        }
    } catch (error) {
        // Handle unexpected runtime or network crashes safely
        console.error("Registration action error:", error);
        return { 
            success: false, 
            message: "An unexpected network error occurred. Please try again." 
        };
    }
};




export const handleLoginUser = async (data: LoginFormData) => {
    try {
        // Sending data to the API utility
        const result = await login(data);
        
        if (result.success) {
            // Returning success state back to your UI component
            return { 
                success: true, 
                message: result.message || "Login successful!", 
                data: result.data 
            };
        } else {
            // Returning validation or API failures back to your UI component
            return { 
                success: false, 
                message: result.message || "Login Failed" 
            };
        }
    } catch (error) {
        // Handle unexpected runtime or network crashes safely
        console.error("Login action error:", error);
        return { 
            success: false, 
            message: "An unexpected network error occurred. Please try again." 
        };
    }
};