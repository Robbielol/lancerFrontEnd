export const AuthApi = {
    registerUser: async (email, password, username) => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, username })
        });

        if (!response.ok) {
            // Attempt to parse the structured error payload from ASP.NET Core
            const errorData = await response.json().catch(() => null);
            throw new Error(errorData?.message || `Registration failed with status: ${response.status}`);
        }

        return await response.json();
    },

    loginUser: async (email, password) => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            // Catches the 401 Unauthorized "Invalid email or password" from C#
            const errorData = await response.json().catch(() => null);
            throw new Error(errorData?.message || `Login failed with status: ${response.status}`);
        }

        return await response.json();
    }
};