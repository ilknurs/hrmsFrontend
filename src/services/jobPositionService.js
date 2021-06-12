import axios from "react-axios"

export default class jobPositionService{
    getJobPosition(){
        return axios.get("http://localhost:8080/api/jobpositions/getall")
    }
}