import React from "react";

function BootstrapTest() {
	return (
		<div className="container" style={{ paddingLeft: "40px" }}>
			<button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
        		Open Modal
      		</button>

			<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Bootstrap Modal</h5>
						</div>

						<div className="modal-body">
							Bootstrap test modal
						</div>

						<div className="modal-footer">
							<button type="button" data-bs-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
    	</div>
	);
}

export default BootstrapTest;
