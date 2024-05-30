import TeamDetails from "../../Components/Team-Tech/Details/TeamDetails";
import "./Team.css";

export default function Team() {
  return (
    <div className="team">
      <div className="headingGL">Team TechnoByte</div>
      <div className="sub-team-heading">
        "Meet the People who worked countless hours behind the scenes to bring
        you the Content , Workshops and Events, the army of Technobyte."
      </div>
      <TeamDetails />
    </div>
  );
}
