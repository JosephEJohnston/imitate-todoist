import TaskContainer from "@/app/component/main/task/task-container";
import DetailTaskHeader from "@/app/component/main/task/detail/detail-task-header";

export default function DetailTask () {
    return (
        <div className="">
            <DetailTaskHeader />
            <TaskContainer />
        </div>
    );
}

