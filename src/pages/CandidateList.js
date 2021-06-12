import React, { useEffect, useState } from 'react'
import CandidateService from "../services/candidateService"
import { Table } from 'semantic-ui-react'

export default function CandidateList() {
    const [candidates, setCandidates] = useState([])
    useEffect(() => {
        let candidateService = new CandidateService()
        candidateService.getCandidate().then(result => setCandidates(result.data.data))
    })
    return ( 
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>National Identity</Table.HeaderCell>
                        <Table.HeaderCell>Date of Birth</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        candidates.map((candidate =>
                            <Table.Row key= {candidate.id}>
                                <Table.Cell>{candidate.firstName}</Table.Cell>
                                <Table.Cell>{candidate.lastName}</Table.Cell>
                                <Table.Cell>{candidate.nationalIdentity}</Table.Cell>
                                <Table.Cell>{candidate.dateOfBirth}</Table.Cell>
                                <Table.Cell>{candidate.email}</Table.Cell>
                            </Table.Row>
                        )
                        )}

                </Table.Body>
            </Table>

        </div>
    )
}
