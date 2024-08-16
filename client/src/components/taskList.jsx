import taskService from "../services/task.service";
import { useQuery } from "@tanstack/react-query";

export const TaskList = () => {
    
  const {
    data,
    isLoading,
  } = useQuery({
    queryKey: ["fetchTasks"],
    queryFn: async () => {
      return await taskService.get();
    },
  });

  return (
    <div className="tasklist">
      {isLoading ? (
        "...loading"
      ) : (
        <ul >
          {data?.data?.data?.map((item, index) => {
            return <li key={index}>{item?.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};
