import Ls from './ls'

export default {
    /**
     * api get Info of user
     */
    async getUser() {
        try {
            let response = await axios.get('/api/users/me')
            return response.data;
        } catch (error) {
            toastr['error'](__('Something was wrong. Please try again later!'), 'Error')
            console.log(error);
        }
    },
    /**
     * api get project of user join
     */
    async getUserProject(page) {
        try {
            let response = await axios.get('/api/users/me/projects?page=' + page)
            return response.data;
        } catch (error) {
            toastr['error'](__('Something was wrong. Please try again later!'), 'Error')
        }
    },
    /**
     * api get comment of user who are interested
     */
    async getMyComment(page) {
        try {
            let response = await axios.get('/api/users/me/mycomments?page=' + page)
            return response.data;
        } catch (error) {
            toastr['error'](__('Something was wrong. Please try again later!'), 'Error')
        }
    },
    /**
     * 
     * @param {*} value 
     */
    async getCommentsMyLike(page) {
        try {
            let response = await axios.get('/api/users/me/commentsmylike?page=' + page);
            return response.data;
        } catch (error) {
            toastr['error'](__('Something was wrong. Please try again later!'), 'Error')
        }
    },
    /**
     * 
     * @param {*} data 
     */
    async editUserProfile(data) {
        try {
            let response = await axios.post('/api/users/me/edit', data);
            toastr['success'](__('Edit Profile Successfully!'), 'Success');
            return response.data;
        } catch (error) {
            toastr['error'](__('Something was wrong. Please try again later!'), 'Error')
        }
    },
    /**
     * 
     * @param {*} data 
     */
    async editUserAvatar(data) {
        try {
            let response = await axios.post('/api/users/me/avatar', data);
            toastr['success'](__('Edit Avatar Successfully!'), 'Success');
            Ls.remove('auth.userImage');
            Ls.set('auth.userImage', response.data.avatarUrl)
            return response.data;
        } catch (error) {
            toastr['error'](__('Something was wrong. Please try again later!'), 'Error')
        }
    },
    /**
     * 
     * @param {*} data 
     */
    async unSubcribeProject(data) {
        try {
            let response = await axios.post('/api/users/me/unsub', data);
            toastr['success'](__('Unsubcribe Successfully!'), 'Success');
            return response.data;
        } catch (error) {
            toastr['error'](__('Something was wrong. Please try again later!'), 'Error')
        }
    },

}
