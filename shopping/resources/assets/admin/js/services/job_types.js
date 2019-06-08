export default {
    async currentJobType() { },

    async listJobType(params) {
        try {
            let response = await axios.get("/api/admin/job_types", {
                params: params
            });
            return response.data;
        } catch (error) {
            console.log("Error", error.message);
        }
    },

    async getJobType(id) {
        try {
            let response = await axios.get("/api/admin/job_types/" + id);
            return response.data;
        } catch (error) {
            toastr["error"](__("There was an error"), "Error");
            console.log("Error", error.message);
        }
    },

    async saveJobType(id, data) {
        // try {
        //     let response = await axios.put("/api/admin/job_types/" + id, data);
        //     toastr["success"](__("Job Type Saved"), "Success");
        //     return response.data;
        // } catch (error) {
        //     toastr["error"](__("There was an error"), "Error");
        // }
        try {
            let response = await axios
                .put("/api/admin/job_types/" + id, data);
            {
                console.log(response.data.validate);
                if (response.data.validate) {
                    var message = response.data.validate.name;
                    window.toastr['error'](message[0], 'Error')
                }
                else {
                    window.toastr["success"](__("Job Type Edit"), "Success");
                    return response.data;
                }
            }
        }
        catch (error) {
            window.toastr["error"](__("There was an error"), "Error");
        }
    },

    async deleteJobType(id) {
        try {
            let response = await axios.delete("/api/admin/job_types/" + id);
            window.toastr["success"](__("JobType Deleted"), "Success");
            return !!response.data;
        } catch (error) {
            window.toastr["error"](__("There was an error"), "Error");
            console.log(error.message);
        }
    }
};
