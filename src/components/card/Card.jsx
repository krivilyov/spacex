import './card.css';
import { Link } from "react-router-dom";

export default function Card (props) {
	const {card, draggable, setCurrentCard} = props;

	function dragStartHandler (e, card) {
		setCurrentCard(card);
	}

	return (
		<Link to={`/launch/${card.id}`} className="card-link">
			<div className="card"
				 draggable={draggable}
				 onDragStart={(e) => dragStartHandler(e, card)}
			>
				<div className="card-title">{card.name}</div>
				<div className="card-description">
					{card.date_local}
				</div>
			</div>
		</Link>
	);
}