
import RootLayout from "@/app/layout";
import DashboardLayout from "@/app/dashboard/layout";
import MainPart from "@/component/main/MainPart";

export default function Home() {
    return (
        <>
            <RootLayout>
                <DashboardLayout>
                    <MainPart />
                </DashboardLayout>
            </RootLayout>
        </>
    )
}

