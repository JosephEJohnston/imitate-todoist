import TaskContainer from "@/app/component/main/task/TaskContainer";
import DetailTaskHeader from "@/app/component/main/task/detail/DetailTaskHeader";

export default function DetailTask () {
    return (
        <div className="">
            <DetailTaskHeader />
            <TaskContainer />
        </div>
    );
}

