export default {
    async currentJob() { },

    async listJob(params) {
        try {
            let response = await axios.get("/api/admin/jobs", {
                params: params
            });
            return response.data;
        } catch (error) {
            console.log("Error", error.message);
        }
    },

    async getJob(id) {
        try {
            let response = await axios.get("/api/admin/jobs/" + id);
            return response.data;
        } catch (error) {
            toastr["error"](__("There was an error"), "Error");
            console.log("Error", error.message);
        }
    },

    async saveJob(id, data) {
        try {
            let response = await axios
                .put("/api/admin/jobs/" + id, data);
            {
                console.log(response.data.validate);
                if (response.data.validate) {
                    var message = response.data.validate.name;
                    window.toastr['error'](message[0], 'Error')
                }
                else {
                    window.toastr["success"](__("Job Edit"), "Success");
                    return response.data;
                }
            }
        }
        catch (error) {
            window.toastr["error"](__("There was an error"), "Error");
        }
    },

    async deleteJob(id) {
        try {
            let response = await axios.delete("/api/admin/jobs/" + id);
            window.toastr["success"](__("Job Deleted"), "Success");
            return !!response.data;
        } catch (error) {
            window.toastr["error"](__("There was an error"), "Error");
        }
    }
};
