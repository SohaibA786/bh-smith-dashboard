import './projects.css'
import search from '../../assets/search.png'
import sort from '../../assets/Sort.svg'
import React, { useState } from 'react';

function Projects() {
    const [projects, setProjects] = useState([
        // Sample project data
        {
            id: 1,
            siteName: 'Project A',
            location: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
            installationDate: '2023/08/01',
            customer: 'Customer A',
            status: 'Active',
            lastUpdate: '2023/10/01',
        },
        {
            id: 2,
            siteName: 'Project A',
            location: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
            installationDate: '2023/08/01',
            customer: 'Customer B',
            status: 'Active',
            lastUpdate: '2023/10/01',
        },
        {
            id: 3,
            siteName: 'Project A',
            location: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
            installationDate: '2023/08/01',
            customer: 'Customer C',
            status: 'Active',
            lastUpdate: '2023/10/01',
        },
    ]);

    const [searchQuery, setSearchQuery] = useState('');

    const filteredProjects = projects.filter((project) =>
        project.siteName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.customer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className='project-container'>
            <div className='first-row'>
                <h2 className='heading'>My Projects</h2>
                <div className='search'>
                    <div className='search-box'>
                        <img className='search-icon' src={search} alt='search icon' />
                        <input
                            className='input'
                            type='text'
                            placeholder='Search by site/customer name'
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className='new-project'>
                        <span className='button-text'>+</span>
                        <span className='button-text'>Create new project</span>
                    </div>
                </div>
            </div>
            <div className="project-table-container">
                <table className="project-table">
                    <thead>
                        <tr className='table-headings'>
                            <th>Site Name</th>
                            <th>Location</th>
                            <th className='sort'><img src={sort} alt='sorting' /><span>Installation Date</span></th>
                            <th>Customer</th>
                            <th className='sort'><img src={sort} alt='sorting' /><span>Status</span></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        {filteredProjects.map((project) => (
                            <tr key={project.id}>
                                <td>{project.siteName}</td>
                                <td>{project.location}</td>
                                <td>{project.installationDate}</td>
                                <td>{project.customer}</td>
                                <td><span className='badge'>{project.status}</span><br /><span className='badge-under'>Last Updated On {project.lastUpdate}</span></td>
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

export default Projects;
