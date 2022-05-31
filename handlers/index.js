import Airtable from 'airtable';
import { useState } from 'react';
const ApiKey = process.env.NEXT_PUBLIC_API_KEY;
const BaseID = process.env.NEXT_PUBLIC_BASE_ID;

// console.log(ApiKey,BaseID)
const base = new Airtable({endpointUrl: 'https://api.airtable.com',apiKey: ApiKey}).base(BaseID);

// axios.defaults.baseURL = `https://api.airtable.com/v0/${BaseID}`;

// axios.defaults.headers.post['Content-Type'] ='application/json';

// axios.defaults.headers['Authorization'] = `Bearer ${ApiKey}`;

export default function useData() {
    const[data, setData] = useState(null);

    const getData = async () => {
        const endpoints = ['Projects','Platforms','Certifications', 'Education', 'About','Homepage'];
        const requests  = endpoints.map(
            each => base(each).select().all());
        // const requests = endpoints.map(
        //     each => axios.get(each)
        // )
        const responses = await Promise.all(requests)
        const modifiedResp = responses.map(
            each => each.map(
                eachObj => ({...eachObj.fields})
            )
        )
        // console.log(modifiedResp)
        return setData(modifiedResp)
    }
    return {
        getData, data
    }
}