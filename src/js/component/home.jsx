import React from "react";
import NumberCard from "./numberCard";
import ClockIcon from "./clockIcon";

//create your first component
const Home = (props) => {
	
	let firstDigit = props.seconds % 10
	let secondDigit = Math.floor(props.seconds / 10) % 10
	let thirdDigit = Math.floor(props.seconds / 100) % 10
	let fourthDigit = Math.floor(props.seconds / 1000) % 10
	let fifthDigit = Math.floor(props.seconds / 10000) % 10
	let sixthDigit = Math.floor(props.seconds / 100000) % 10
	
	return (
		<div className="container-flex d-flex justify-content-center m-3">
			<ClockIcon/>
			<NumberCard number={sixthDigit} />
			<NumberCard number={fifthDigit} />
			<NumberCard number={fourthDigit} />
			<NumberCard number={thirdDigit} />
			<NumberCard number={secondDigit} />
			<NumberCard number={firstDigit} />
		</div>
	);
};

export default Home;
