import React from 'react'
import React, { useState, useEffect } from "react";
import JobPositionService from '../services/jobPositionService'

export default function JobPositionList() {
    const [jobpositions, setJobPosition] = useState([])
    useEffect(() => {
        let jobPositionService = new JobPositionService();
        jobPositionService.getJobPosition().then(result => setJobPosition(result.data.data))
    })
    return (
        <div>
           <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Job Position</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        jobpositions.map(jobposition => (
                            <Table.Row key={jobposition.id}>
                                <Table.Cell>{jobposition.title}</Table.Cell>
                                <Table.Cell>{jobposition.createdDay}</Table.Cell>
                                <Table.Cell>{jobposition.updatedDate}</Table.Cell>
                                <Table.Cell>{jobposition.status}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table> 
        </div>
    )

    }