export default {
    async currentUser() {

    },

    async listUser(params) {
        try {
            let response = await axios.get('/api/admin/users', {
                params: params,
            })
            return response.data
        } catch (error) {
            console.log('Error', error.message)
        }
    },

    async getProfile(id) {
        try {
            let response = await axios.get('/api/admin/users/' + id)
            return response.data
        } catch (error) {
            toastr['error'](__('There was an error'), 'Error')
            console.log('Error', error.message)
        }
    },

    async saveProfile(id, data) {
        try {
            let response = await axios.put('/api/admin/users/' + id, data)
            toastr['success'](__('User Saved'), 'Success')
            return response.data
        } catch (error) {
            toastr['error'](__('There was an error'), 'Error')
            console.log('Error', error.message)
        }
    },

    async deleteUser(id) {
        try {
            let response = await axios.delete('/api/admin/users/' + id)
            window.toastr['success'](__('User Deleted'), 'Success')
            return !!response.data
        } catch (error) {
            window.toastr['error'](__('There was an error'), 'Error')
            console.log(error.message)
        }
    }
}