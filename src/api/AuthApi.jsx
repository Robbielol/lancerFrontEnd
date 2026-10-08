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
    }
};