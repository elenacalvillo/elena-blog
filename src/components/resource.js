import React from "react"
import { Link } from 'gatsby';
import { Card } from "react-bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"

function Resource(props) {

  return (
	  <div className="col-md-4 mb-5">
		<Link to={`${props.link}?ref=elenacalvillo.com`} target="_blank" rel="noreferrer" itemProp="url">
		  <Card className={`resource ${props.color} h-100 `} temProp="url">
			<div className="row">
			  <div className="col">
				<div className="card-body">
				<h6 className="m-0">
					<i className={`bi ${props.icon} `}></i> {""}
						{props.type}
				</h6>
				  <h4 className="card-title hvr-icon-forward" itemProp="headline">
					{props.title} {""}
					<svg
					width="1em"
					height="1em"
					viewBox="0 0 16 16"
					className="bi bi-box-arrow-in-up-right hvr-icon"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
				  >
					<path
					  fill-rule="evenodd"
					  d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"
					/>
					<path
					  fill-rule="evenodd"
					  d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"
					/>
				  </svg>
				  </h4>
				  <p className="card-text" itemProp="description">
					{props.body}
				  </p>
				</div>
			  </div>
			</div>
		  </Card>
		</Link>
	  </div>

  )
}
export default Resource