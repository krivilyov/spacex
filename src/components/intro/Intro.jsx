import './intro.css';
import earth from '../../images/earth.png';
import Card from '../card/Card';
import {useState, useEffect} from "react";
import axios from "axios";

export default function Intro () {
	const [pastLaunches, setPastLaunches] = useState([]);
	const [launches, setLaunches] = useState([]);

	useEffect(() => {
		const getLaunches = async () => {
			try {
				const res_1 = await axios.post("https://api.spacexdata.com/v5/launches/query", {
					"query": {
						"upcoming": false,
					},
					"options": {
						"sort": {"date_unix": "desc"},
						"limit": 8
					}
				});

				setPastLaunches(res_1.data.docs);

				const currentUnixTime = Math.round(+new Date()/1000);
				const res_2 = await axios.post("https://api.spacexdata.com/v5/launches/query", {
					"query": {
						"upcoming": true,
						"date_unix": { "$gt": currentUnixTime }
					},
					"options": {
						"sort": {"date_unix": "asc"},
						"limit": 8
					}
				});

				setLaunches(res_2.data.docs);

			} catch (error) {
				console.log(error);
			}
		}

		getLaunches();

	}, []);

	return (
		<div className="container">
			<div className="title-section">
				<h1>Explore the space</h1>
				<img className="earth-img" src={earth} alt="earth" />
			</div>

			<div className="board-section">
				<div className="board-column">
					<h2>Past launches</h2>
					<div className="board">
						{pastLaunches.length > 0 && (
							pastLaunches.map((launchData, index) => (
								<Card launchData={launchData} key={index} type={'past'} />
							))
						)}
					</div>
				</div>
				<div className="board-column">
					<h2>Launches</h2>
					<div className="board">
						{launches.length > 0 && (
							launches.map((launchData, index) => (
								<Card launchData={launchData} key={index} type={'current'} />
							))
						)}
					</div>
				</div>
				<div className="board-column">
					<h2>My launches</h2>
					<div className="board">
						Cards
					</div>
				</div>
			</div>

		</div>
	);
}