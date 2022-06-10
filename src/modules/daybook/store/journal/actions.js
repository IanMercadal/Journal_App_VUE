import journalApi from '@/api/journalApi';
// export const myAction = async ({commit}) => {

// }
export const loadEntries = async ({commit}) => {
    const {data} = await journalApi.get('/entries.json');
    const entries = [];
    for(let id of Object.keys(data)) {
        entries.push({
            id,
            ...data[id]
        })
    }

    commit('setEntries',entries);
}
export const updateEntry = async ({commit}, entry) => {

    const {date,picture,text} = entry;
    const dateToSave = {date,picture,text};

    const resp = await journalApi.put(`/entries/${entry.id}.json`, dateToSave);
    console.log(resp);

    commit('updateEntry',{...entry});
}
export const createEntries = async (/* {commit} */) => {

}