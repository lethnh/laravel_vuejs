import Ls from './ls'

export default {
    async login(loginData) {
        try {
            let response = await axios.post('/api/auth/login', loginData)

            Ls.set('auth.token', response.data.token)
            Ls.set('auth.userName', response.data.user.name)
            Ls.set('auth.userImage', response.data.user.avatarUrl)
            Ls.set('user.cash', response.data.user.cash ? response.data.user.cash : 0 )
            toastr['success']('Logged In!', 'Success')
            return response.data.token
        } catch (error) {
            if (error.response.status == 401) {
                toastr['error'](error.response.data.error, 'Error')
            } else {
                console.log('Error', error.message)
            }
        }
    },

    async register(registerData) {
        try {
            let response = await axios.post('/api/auth/register', registerData)
            toastr['success'](__('ご登録アドレスに、認証メールを送りましたので、ご確認下さい'))
            return response;
        } catch (error) {
            toastr['error']('Register failed', 'Error')
            console.log(error)
        }
    },

    async logout() {
        try {
            await axios.post('/api/auth/logout')
            Ls.remove('auth.token')
            Ls.remove('auth.userName')
            Ls.remove('auth.userImage')
            Ls.remove('user.cash')
        } catch (error) {
            console.log('Error', error.message)
        }
    },

    async checkLogin() {
        let response = await axios.get('/api/auth/check-login')
        return !!response.data.authenticated
    },

    async forgotPassword(forgotData) {
        try {
            let response = await axios.post('/api/auth/password/forgot', forgotData)
            return response.data.success;
        } catch (error) {
            toastr['error'](__('Something was wrong. Please try again later!'), 'Error')
            console.log('Error ', error.message)
        }
    },

    async resetPassword(resetData) {
        try {
            let response = await axios.post('/api/auth/password/reset', resetData)
            return response.data.success;
        } catch (error) {
            toastr['error'](__('Something was wrong. Please try again later!'), 'Error')
            console.log('Error ', error.message)
        }
    },

    async checkExistEmail(obj) {
        try {
            let response = await axios.post('/api/auth/check-exist', obj)
            return response.data.existed;
        } catch (error) {
            toastr['error'](__('Something was wrong. Please try again later!'), 'Error')
            console.log('Error ', error.message)
        }
    },

    async payment(data) {
        try {
            let response = await axios.post('/api/users/me/payment', data)
            return response.data;
        } catch (error) {
            toastr['error'](__('Something was wrong. Please try again later!'), 'Error')
            console.log('Error ', error.message)
        }
    },

    async verify(token) {
        try {
            let response = await axios.post('/api/auth/verify/' + token)
            return response.data.verified;
        } catch (error) {
            toastr['error'](__('Something was wrong. Please try again later!'), 'Error')
            console.log('Error ', error.message)
        }
    }
}
