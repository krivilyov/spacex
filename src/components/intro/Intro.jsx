import './intro.css';
import earth from '../../images/earth.png';
import Card from '../card/Card';
import Modal from '../modal/Modal';
import {useState, useEffect} from "react";
import axios from "axios";

export default function Intro () {
	const [pastLaunches, setPastLaunches] = useState([]);
	const [launches, setLaunches] = useState([]);
	const [currentCard, setCurrentCard] = useState(null);
	const [modalOpen, setModalOpen] = useState(false);
	const [unReserve, setUnReserve] = useState(false);

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

				const launchesFromAPI = res_2.data.docs;
				//created copy array for add reserved property
				const formattedLaunches = launchesFromAPI.map(function (current){
					let launche = Object.assign({}, current);
					launche.reserved = 0;
					return launche;
				})

				setPastLaunches(res_1.data.docs);
				setLaunches(formattedLaunches);
			} catch (error) {
				console.log(error);
			}
		}

		getLaunches();

	}, []);

	useEffect(() => {
		if(unReserve) {
			updateLaunches();
			setUnReserve(false);
		}
	},[unReserve])

	function boardDragOverHandler (e) {
		e.preventDefault();
	}

	function boardDropHandler (e) {
		e.preventDefault();

		if(currentCard && currentCard.reserved > 0) {
			//show popup
			setModalOpen(true);
		}


		if(currentCard && currentCard.reserved < 1) {
			updateLaunches();
		}
	}

	function updateLaunches () {
		// find card by id in our array and change status reserved
		const changedLaunches = launches.map(function (current){
			let launche = Object.assign({}, current);
			if (launche.id === currentCard.id) {
				if(currentCard.reserved < 1) {
					launche.reserved = 1;
				} else {
					launche.reserved = 0;
				}
			}

			return launche;
		})

		setLaunches(changedLaunches);
	}

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
							pastLaunches.map((card, index) => (
								<Card card={card} key={index} draggable={false} setCurrentCard={setCurrentCard} />
							))
						)}
					</div>
				</div>
				<div className="board-column">
					<h2>Launches</h2>
					<div className="board"
						 onDragOver={e => boardDragOverHandler(e)}
						 onDrop={e => boardDropHandler(e)}
					>
						{launches.length > 0 && (
							launches.map((card, index) => {
								return card.reserved < 1 ?
									<Card card={card} key={index} draggable={true} setCurrentCard={setCurrentCard} />
									: ''
							})
						)}
					</div>
				</div>
				<div className="board-column">
					<h2>My launches</h2>
					<div className="board"
						 onDragOver={e => boardDragOverHandler(e)}
						 onDrop={e => boardDropHandler(e)}
					>
						{launches.length > 0 && (
							launches.map((card, index) => {
								return card.reserved > 0 ?
									<Card card={card} key={index} draggable={true} setCurrentCard={setCurrentCard} />
									: ''
							})
						)}
					</div>
				</div>
				{modalOpen && (
					<Modal setUnReserve={setUnReserve} setModalOpen={setModalOpen} />
				)}
			</div>
		</div>
	);
}