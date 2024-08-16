import API from "../../plugins/api.plugin";

class TaskService {
  get() {
    return API.get("/tasks");
  }
  add(payload) {
    return API.post("/tasks/create", payload);
  }
}

export default new TaskService();
