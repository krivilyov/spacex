import './launch-info.css';
import {useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Skeleton from "../skeleton/Skeleton";

export default function LaunchInfo () {
	let { id } = useParams();
	const [launch, setLaunch] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		//get launch by id
		const getLaunche = async () => {
			setIsLoading(true);

			try {
				const res = await axios.get(`https://api.spacexdata.com/v5/launches/${id}`);
				setLaunch(res.data);
				setIsLoading(false);
			} catch (error) {
				console.log(error);
				setIsLoading(false);
			}
		}

		getLaunche();
	}, []);

	return (
		<>
			{isLoading ? <Skeleton type={'launch-info'} /> :
				<div className="container">
					{launch && (
						<>
							<Link to="/" className="back-link">Back to board</Link>
							<h1 className="launch-info-title">
								{launch.name}
							</h1>
							<div className="date">
								Date: {launch.date_local}
							</div>
							{launch.links.patch.small && (
								<div className="image-container">
									<img src={launch.links.patch.small} alt={launch.name} />
								</div>
							)}
						</>
					)}
				</div>
			}
		</>
	);
}