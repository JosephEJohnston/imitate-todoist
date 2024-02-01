
import RootLayout from "@/app/layout";
import DashboardLayout from "@/app/dashboard/layout";
import ProjectMainPart from "@/component/main/ProjectMainPart";

export default function Home() {
    return (
        <>
            <RootLayout>
                <DashboardLayout>
                    <ProjectMainPart />
                </DashboardLayout>
            </RootLayout>
        </>
    )
}

