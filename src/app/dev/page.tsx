import DevTeamDetails from "@/components/Dev-Team/Details/DevTeam";
import "./Team.css";

export default function DevTeamPage() {
  return (
    <div className="main-container">
      <div className="team">
        <div className="headingGL">Tech-Team</div>
        <div className="sub-team-heading">
          "Meet the Developers of official Technobyte WebApp."
        </div>
        <DevTeamDetails />
      </div>
    </div>
  );
}
