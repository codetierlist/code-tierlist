import { useContext, useEffect, useState } from 'preact/hooks';
import { userContext } from '../../contexts/UserContext';

// Note: `user` comes from the URL, courtesy of our router
const Profile = ({ user }) => {
	const [time, setTime] = useState(Date.now());
	const [count, setCount] = useState(10);
	const userInfo = useContext(userContext);

	useEffect(() => {
		let timer = setInterval(() => setTime(Date.now()), 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div>
			<h1>Profile: {userInfo.name}</h1>
			<p>This is the user profile for a user named {user}.</p>

			<div>Current time: {new Date(time).toLocaleString()}</div>

			<p>
				<button onClick={() => setCount(count => count + 1)}>Click Me</button>{' '}
				Clicked {count} times.
			</p>

			<p>
				{ JSON.stringify(userInfo) }
			</p>
		</div>
	);
};

export default Profile;
