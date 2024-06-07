import DevTeam from "../../Components/Dev-Team/Details/DevTeam";
import "./Team.css";

export default function Team() {
  return (
    <div className="team">
      <div className="headingGL">Tech-Team</div>
      <div className="sub-team-heading">
        "Meet the Developers of official Technobyte WebApp."
      </div>
      <DevTeam />
    </div>
  );
}
