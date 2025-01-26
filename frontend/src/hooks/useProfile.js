import { useState, useEffect } from "react";

const useProfile = (userId) => {
	const [profile, setProfile] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProfile = async () => {
			try {
				const res = await fetch(`/api/users/${userId}`);
				const data = await res.json();
				if (data.error) throw new Error(data.error);
				setProfile(data);
			} catch (error) {
				console.error("Failed to fetch profile:", error);
			} finally {
				setLoading(false);
			}
		};

		if (userId) fetchProfile();
	}, [userId]);

	return { profile, loading };
};

export default useProfile;
