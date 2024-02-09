import { useEffect, useState } from 'react';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';

const ToggleTheme = () => {
	const [toggle, setToggle] = useState<boolean>(false);

	const handleChange = () => setToggle(!toggle);

	useEffect(() => {
		const body = document.querySelector('body');
		body?.setAttribute('data-theme', toggle ? 'light' : 'dark');
	}, [toggle]);

	return (
		<section className="toggle">
			<button onClick={handleChange} className="toggle__button">
				{toggle ? (
					<img
						src="https://icons.veryicon.com/png/o/miscellaneous/color-icon-library/sun-117.png"
						alt="sun"
					/>
				) : (
					<img
						src="https://icons.veryicon.com/png/o/weather/color-flattened-weather-icon/moon-68.png"
						alt="moon"
					/>
				)}
			</button>
		</section>
	);
};

export default ToggleTheme;
