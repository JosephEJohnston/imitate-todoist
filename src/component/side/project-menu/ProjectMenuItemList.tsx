import MenuItem from "@/component/side/MenuItem";

interface ProjectMenuItemProps {
    id: number;
    name: string;
    count: number;
}

function ProjectMenuItem({id, name, count}: ProjectMenuItemProps) {
    return (
        <>
            <MenuItem key={id} path={`/dashboard/project/${id}`} >
                <button className="f-btn">
                    <i className="fb-dot bi bi-record-fill"></i>
                    <span className="f-btn-text">{name}</span>
                </button>
                <div className="f-btn-count-container">
                    <button className="f-btn-count-btn">
                        <i className="bi bi-three-dots"></i>
                    </button>
                    <div className="f-btn-count">{count}</div>
                </div>
            </MenuItem>
        </>
    )
}

const initMenuItemList = [
    {
        id: 1,
        name: '我的工作1',
        count: 6,
    },
    {
        id: 2,
        name: '我的工作2',
        count: 7,
    },
];

interface ProjectMenuItemListProps {
    tabOnShow: boolean
}

export default function ProjectMenuItemList ({tabOnShow}: ProjectMenuItemListProps) {
    return (
        <>
            <div className={`project-task-container 
                    ${tabOnShow ? '' : 'project-task-container-not-show'}`}>
                {initMenuItemList.map(item =>
                    <ProjectMenuItem id={item.id} name={item.name} count={item.count}/>)}
            </div>
        </>
    );
}