export default {
    async subscribe(project) {
        try {
            let response = await axios.post('/api/users/me/subscribe', project)
            return response.data
        } catch (error) {
            toastr['error'](__('Something was wrong. Please try again later!'), 'Error')
        }
    },
}