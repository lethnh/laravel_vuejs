export default {
    async getJobTypes() {
        try {
            let response = await axios.post('/api/job-types/all')
            return response.data.jobTypes
        } catch (error) {
            toastr['error'](__('Something was wrong. Please try again later!'), 'Error')
            console.log('Error ', error.message)
        }
    },

    async getJobs() {
        try {
            let response = await axios.post('/api/jobs/all')
            return response.data.jobs
        } catch (error) {
            toastr['error'](__('Something was wrong. Please try again later!'), 'Error')
            console.log('Error ', error.message)
        }
    },

    async getDataForRegister() {
        try {
            let response = await axios.post('/api/auth/register/get-data')
            return response.data.data
        } catch (error) {
            toastr['error'](__('Something was wrong. Please try again later!'), 'Error')
            console.log('Error ', error.message)
        }
    },

}
