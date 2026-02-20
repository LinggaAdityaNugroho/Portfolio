import SectionTitle from "../components/Atoms/Section/SectionTitle";
import Divider from "../components/Atoms/Divider/Divider";
import { GitHubCalendar } from "react-github-calendar";

export function Dashboard() {
  return (
    <div>
      <SectionTitle
        title={"Dashboard"}
        subtitle={
          "My personal dashboard built with Next.js API routes, visualizing development statistics and contributions in real-time."
        }
      />

      <Divider />

      <div>
        <GitHubCalendar username="LinggaAdityaNugroho" />
      </div>
    </div>
  );
}
