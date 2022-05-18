import './modal.css';

export default function Modal (props) {
	const {setUnReserve, setModalOpen} = props;

	function agreeHandler (e) {
		e.preventDefault();
		setModalOpen(false);
		setUnReserve(true);
	}

	function notAgreeHandler (e) {
		e.preventDefault();
		setModalOpen(false);
	}

	return (
		<div className="modal">
			<div className="modal-title">Do you want to cancel your flight?</div>
			<div className="btns-container">
				<a href="#" className="modal-btn modal-btn-yes" onClick={(e) => agreeHandler(e)}>Yes</a>
				<a href="#" className="modal-btn modal-btn-no" onClick={(e) => notAgreeHandler(e)}>No</a>
			</div>

		</div>
	);
}