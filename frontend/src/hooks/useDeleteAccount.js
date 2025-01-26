import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useDeleteAccount = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();
	const navigate = useNavigate();

	const deleteAccount = async () => {
		setLoading(true);
		try {
			const res = await fetch("/api/auth/delete-account", {
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
				credentials: "include",
			});

			const data = await res.json();
			if (data.error) throw new Error(data.error);

			localStorage.removeItem("chat-user");
			setAuthUser(null);
			toast.success("Account deleted successfully");
			navigate("/signup");
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, deleteAccount };
};
export default useDeleteAccount;
