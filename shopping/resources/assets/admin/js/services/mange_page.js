export default {
    async currentUser() {

    },

    async getListPage(params) {
        try {
            let response = await axios.get('/api/admin/manage-page', {
                params: params,
            })
            return response.data
        } catch (error) {

        }
    },

    async PageUpdate(id, data) {
        try {
            let response = await axios.put('/api/admin/manage-page/' + id, data)
            toastr['success'](__('Questions Saved'), 'Success')
            return response.data
        } catch (error) {
            toastr['error'](__('There was an error'), 'Error')
            console.log('Error', error.message)
        }
    },

    async deletePage(id) {
        try {
            let response = await axios.delete('/api/admin/manage-page/' + id)
            window.toastr['success'](__('Page Deleted'), 'Success')
            return !!response.data
        } catch (error) {
            window.toastr['error'](__('There was an error'), 'Error')
            console.log(error.message)
        }
    }
}