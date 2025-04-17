"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        const response = await fetch('/api/logout', {
          method: 'POST',
          credentials: 'include', // Ensure cookies are sent
        });

        if (response.ok) {
          alert("Logout successful");
          router.push("/app"); // Redirect to login page
        } else {
          alert("Logout failed. Please try again.");
        }
      } catch (error) {
        console.error("Logout error:", error);
      }
    };

    handleLogout();
  }, [router]);

  return <p>Logging out...</p>;
}
