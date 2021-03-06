import React from 'react'
import React, { useState, useEffect } from "react";
import JobAdvertisementService from '../services/jobAdvertisementService';

export default function JobAdvertisementList() {
    const [jobadvertisements, setJobAdvertisement] = useState([])
    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisement().then(result => setJobAdvertisement(result.data.data))
    })
    return (
        <div>
            <Table celled >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Max Salary</Table.HeaderCell>
                        <Table.HeaderCell>Min Salary</Table.HeaderCell>
                        <Table.HeaderCell>Active Position</Table.HeaderCell>
                        <Table.HeaderCell>Last Apply Date</Table.HeaderCell>
                        <Table.HeaderCell>Is Active</Table.HeaderCell>
                    </Table.Row> 
                </Table.Header>
                <Table.Body>
                    {
                        jobadvertisements.map(jobadvertisement => (
                            <Table.Row key={jobadvertisement.id}>
                                <Table.Cell>{jobadvertisement.description}</Table.Cell>
                                <Table.Cell>{jobadvertisement.maxSalary}</Table.Cell>
                                <Table.Cell>{jobadvertisement.minSalary}</Table.Cell>
                                <Table.Cell>{jobadvertisement.activePosition}</Table.Cell>
                                <Table.Cell>{jobadvertisement.lastApplyDate}</Table.Cell>
                                <Table.Cell>{jobadvertisement.isActive}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
