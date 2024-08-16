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
    <>
      {isLoading ? (
        "...loading"
      ) : (
        <ul className="list-disc">
          {data?.data?.data?.map((item) => {
            return <li key={item?.id}>{item?.name}</li>;
          })}
        </ul>
      )}
    </>
  );
};
