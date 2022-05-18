import './skeleton.css';

export default function Skeleton (props) {
	const {type} = props;

	const IntroSkeleton = () => (
		<div className="container-sk">
			<div className="title-section-sk">
				<div className="title-text-sk"></div>
				<div className="earth-img-sk"></div>
			</div>

			<div className="board-section-sk">
				<div className="board-column-sk">
					<div className="board-column-title-sk"></div>
					<div className="board-sk">
						<div className="card-sk">
							<div className="card-title-sk"></div>
							<div className="card-description-sk"></div>
						</div>
						<div className="card-sk">
							<div className="card-title-sk"></div>
							<div className="card-description-sk"></div>
						</div>
						<div className="card-sk">
							<div className="card-title-sk"></div>
							<div className="card-description-sk"></div>
						</div>
						<div className="card-sk">
							<div className="card-title-sk"></div>
							<div className="card-description-sk"></div>
						</div>
						<div className="card-sk">
							<div className="card-title-sk"></div>
							<div className="card-description-sk"></div>
						</div>
						<div className="card-sk">
							<div className="card-title-sk"></div>
							<div className="card-description-sk"></div>
						</div>
						<div className="card-sk">
							<div className="card-title-sk"></div>
							<div className="card-description-sk"></div>
						</div>
						<div className="card-sk">
							<div className="card-title-sk"></div>
							<div className="card-description-sk"></div>
						</div>
					</div>
				</div>
				<div className="board-column-sk">
					<div className="board-column-title-sk"></div>
					<div className="board-sk">
						<div className="card-sk">
							<div className="card-title-sk"></div>
							<div className="card-description-sk"></div>
						</div>
						<div className="card-sk">
							<div className="card-title-sk"></div>
							<div className="card-description-sk"></div>
						</div>
						<div className="card-sk">
							<div className="card-title-sk"></div>
							<div className="card-description-sk"></div>
						</div>
						<div className="card-sk">
							<div className="card-title-sk"></div>
							<div className="card-description-sk"></div>
						</div>
						<div className="card-sk">
							<div className="card-title-sk"></div>
							<div className="card-description-sk"></div>
						</div>
						<div className="card-sk">
							<div className="card-title-sk"></div>
							<div className="card-description-sk"></div>
						</div>
						<div className="card-sk">
							<div className="card-title-sk"></div>
							<div className="card-description-sk"></div>
						</div>
						<div className="card-sk">
							<div className="card-title-sk"></div>
							<div className="card-description-sk"></div>
						</div>
					</div>
				</div>
				<div className="board-column-sk">
					<div className="board-column-title-sk"></div>
					<div className="board-sk">
						<div className="card-sk">
							<div className="card-title-sk"></div>
							<div className="card-description-sk"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	const LaunchInfoSkeleton = () => (
		<div className="container-sk">
			<div className="back-link-sk"></div>
			<div className="launch-info-title-sk"></div>
			<div className="date-sk"></div>
			<div className="image-container-sk"></div>
		</div>
	);

	if(type === 'intro') {
		return <IntroSkeleton />;
	}

	if(type === 'launch-info') {
		return <LaunchInfoSkeleton />;
	}
}