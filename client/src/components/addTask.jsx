import { useMutation, useQueryClient } from "@tanstack/react-query";
import taskService from "../services/task.service";

export const AddTask = () => {
  const queryClient = useQueryClient();
  const minDate = new Date().toISOString().substring(0, 10);

  const addTaskMutation = useMutation({
    mutationKey: ["addTask"],
    mutationFn: async (data) => {
      return await taskService.add(data);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries(["fetchTasks"]);
    },
  });

  const handleSubmiTask = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {};

    for (const [key, value] of form.entries()) {
      if (value.length > 0) {
        payload[key] = value;
      }
    }

    addTaskMutation.mutate(payload);

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmiTask} className="form-box">
      <div>
        <label> Task info </label>
        <input required name="name" placeholder="Name" />
        <input name="status" placeholder="Status" />
        <input name="dueDate" type="date" min={minDate} />
        <textarea name="description" placeholder="Description" />
      </div>

      <button type="submit" id="submitBtn" className="submitBtn">
        {" "}
        submit
      </button>
    </form>
  );
};
