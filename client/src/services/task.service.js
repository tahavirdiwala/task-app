import API from "../../plugins/api.plugin";

class TaskService {
  get() {
    // return axios.get("http://localhost:5000/api/tasks");
    return API.get("/tasks");
  }
}

export default new TaskService();
