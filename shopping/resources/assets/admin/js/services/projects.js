export default {
    async currentUser() {

    },

    async listProject(params) {
        try {
            let response = await axios.get('/api/admin/projects', {
                params: params,
            })
            return response.data
        } catch (error) {
            console.log('Error', error.message)
        }
    },

    async deleteProject(id) {
        try {
            let response = await axios.delete('/api/admin/projects/' + id)
            window.toastr['info'](response.data, 'Info')
            console.log(response.data);
            return !!response.data
        } catch (error) {
            window.toastr['error'](__('There was an error'), 'Error')
            console.log(error.message)
        }
    }
}