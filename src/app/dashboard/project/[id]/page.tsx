import ProjectMainPart from "@/component/main/ProjectMainPart";

export function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

export default function ProjectItemPage ({ params }: { params: { id: string } }) {
    console.log(params.id);

    return (
        <>
            <ProjectMainPart />
        </>
    );
}
