import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { addLocation , addJob } from './features/jobsListing/jobslistingSlice';
import axios from "axios";
import './App.css';
import Job from './components/jobs/job';
import JobForm from './components/jobs/job_form';

const App = () => {
  const jobs_applied = useSelector(state => state.jobsListing)
  const dispatch = useDispatch();
  const jobsCities= ["New York","San Francisco", "Los Angeles"];
  const apiUrl = "https://79vzv34gc4.execute-api.us-west-1.amazonaws.com/default/jobListings?location="
  const {jobs, city } = jobs_applied;
  
  const CallJobsApi = async (job) => {
    try {
      const response = await axios.get(apiUrl + `${job}`)
      if (response.status === 200) { 
        let jobs_search = response.data;
        let full_job_search = [job,jobs_search]
        dispatch(addLocation(full_job_search));
      } else {
        throw new Error("The Following API is not connected Properly");
      }
    } catch (err) {
      console.error(err)
    }
  }


  return (
    <div className="container">
      <h1>Github Job Listings</h1>
      <h4>City: {city}</h4>
      <div className="form_data">
        <JobForm dispatch={dispatch}
          jobs_applied={jobs_applied}
          addJob={addJob}
        />
      </div>
      <div className="jobs-categorie-lists">
      <span>Locations: </span>
        {jobsCities.map((job) => (
          <button className="button" key={job} onClick={() => {
            CallJobsApi(job)
          }}>
          {job}
          </button>
        ))}
      </div>
      <h3>{jobs.length} Job Listings</h3>
      <ol>
        {jobs.map((job) => (
          <Job type={job.type}
            key={job.id}
            url={job.url}
            createdAt={job.created_at}
            company={job.company}
            company_url={job.company_url}
            location={job.location}
            title={job.title}
            description={job.description}
          />
        ))}
      </ol>
    </div>
  )
}

export default App;


