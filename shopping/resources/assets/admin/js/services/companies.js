export default {
    async currentCompany() { },

    async listCompany(params) {
        try {
            let response = await axios.get("/api/admin/companies", {
                params: params
            });
            return response.data;
        } catch (error) {
            console.log("Error", error.message);
        }
    },

    async getCompany(id) {
        try {
            let response = await axios.get("/api/admin/companies/" + id);
            return response.data;
        } catch (error) {
            toastr["error"](__("There was an error"), "Error");

        }
    },

    async saveCompany(id, data) {
        try {
            let response = await axios.put("/api/admin/companies/" + id, data);
            toastr["success"](__("Company Saved"), "Success");
            return response.data;
        } catch (error) {
            toastr["error"](__("There was an error"), "Error");
        }
    },

    async deleteCompany(id) {
        try {
            let response = await axios.delete("/api/admin/companies/" + id);
            window.toastr['info'](response.data, 'Info')
            console.log(response.data);
            return !!response.data
        } catch (error) {
            window.toastr["error"](__("There was an error"), "Error");
            console.log(error.message);
        }
    }
};
