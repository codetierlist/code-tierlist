import { useContext, useEffect, useState } from 'preact/hooks';
import { userContext } from '../../contexts/userContext';

// Note: `user` comes from the URL, courtesy of our router
const Profile = () => {
	const userInfo = useContext(userContext);

	return (
		<div>
			<h1>Profile: {userInfo.name}</h1>
		</div>
	);
};

export default Profile;
