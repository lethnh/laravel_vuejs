export default {

    async get(params) {
        try {
            let response = await axios.get('/api/admin/settings', {
                params: params,
            })
            return response.data
        } catch (error) {
            console.log('Error', error.message)
        }
    },

    async save(data) {
        try {
            let response = await axios.put('/api/admin/settings/', data)
            toastr['success'](__('Settings Saved'), 'Success')
            return response.data
        } catch (error) {
            toastr['error'](__('There was an error'), 'Error')
            console.log('Error', error.message)
        }
    },

}