import axios from 'axios';

const journalApi = axios.create({
    baseURL: 'https://vue-journal-4a230-default-rtdb.europe-west1.firebasedatabase.app'
})

export default journalApi;