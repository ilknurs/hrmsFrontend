import React from 'react'
import { Grid } from 'semantic-ui-react'
import CandidateList from '../pages/CandidateList'
import CityList from '../pages/CityList'


export default function Dashboard() {
    return (
        <Grid columns={3} divided>
            
            <Grid.Row>
                <Grid.Column >
                    <CandidateList/>
                    
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                <CityList/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
