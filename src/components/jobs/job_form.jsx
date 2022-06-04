import React, { useState } from 'react'

const JobForm = ({dispatch, jobs_applied, addJob}) => {
	const [title, setTitle] = useState("");
	const [company, setCompany] = useState("");
	const [location, setLocation] = useState("");
	const [description, setDescription] = useState("");
	const [more_info, setMore_info] = useState("");
	const job = {
		title,
		company,
		location,
		description,
		more_info,
		type: "Full Time",
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addJob(job))
	}
  return (
		<div>
			<form className="add_job" onSubmit={handleSubmit} key={jobs_applied.id}>
				<label>
					Title:
					<input type="text" value={title} onChange={(e) => {
						setTitle(e.target.value);
					}}/>
				</label>
				<br />
				<label>
					Company: 
					<input type="text" value={company} onChange={(e) => {
						setCompany(e.target.value)
					}}/>
				</label>
				<br />
				<label>
					Location: 
					<input type="text" value={location} onChange={(e) => {
						setLocation(e.target.value);
					}}/>
				</label>
				<br />
				<label>
					Description:
					<textarea value={description} onChange={(e) => {
						setDescription(e.target.value)
					}}/>
				</label>
				<br />
				<label>
					More Info:
					<input type="text" value={more_info} onChange={(e) => {
						setMore_info(e.target.value);
					}}/>
				</label>
				<br />
				<input type="submit" value="Add Job"/>
			</form>
		</div>
  )
}

export default JobForm;