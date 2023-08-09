import './projects.css'
import search from '../../assets/search.png'
import React, { useState } from 'react';

function Projects() {

    const [projects, setProjects] = useState([
        // Sample project data
        {
            id: 1,
            siteName: 'Project A',
            location: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
            installationDate: '2023-08-01',
            customer: 'Customer A',
            status: 'Active',
        },
        {
            id: 2,
            siteName: 'Project A',
            location: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
            installationDate: '2023-08-01',
            customer: 'Customer A',
            status: 'Active',
        },
        {
            id: 3,
            siteName: 'Project A',
            location: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
            installationDate: '2023-08-01',
            customer: 'Customer A',
            status: 'Active',
        },
        // ... more project data
    ]);

    return (
        <div className='project-container'>
            <h2 className='heading'>My Projects</h2>
            <div className='search'>
                <div className='search-box'>
                    <img className='search-icon' src={search} alt='search icon' />
                    <input className='input' type='text' placeholder='Search by site/customer name' />
                </div>
                <div className='new-project'>
                    <span className='button-text'>+</span>
                    <span className='button-text'>Create new project</span>
                </div>
            </div>


            <div className="project-table-container">
                <table className="project-table">
                    <thead>
                        <tr>
                            <th>Site Name</th>
                            <th>Location</th>
                            <th>Installation Date</th>
                            <th>Customer</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project) => (
                            <tr key={project.id}>
                                <td>{project.siteName}</td>
                                <td>{project.location}</td>
                                <td>{project.installationDate}</td>
                                <td>{project.customer}</td>
                                <td>{project.status}</td>
                                <td>
                                    <span className="options-icon">...</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Projects