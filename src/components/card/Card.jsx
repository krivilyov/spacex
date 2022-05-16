import './card.css';

export default function Card (props) {
	const {launchData, type} = props;

	return (
		<div className="card">
			<div className="card-title">{launchData.name}</div>
			<div className="card-description">
				{launchData.date_local}
			</div>
		</div>
	);
}