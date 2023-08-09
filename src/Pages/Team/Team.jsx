import TeamAnimation from "../../Components/Team-Tech/Animation/TeamAnimation";
import TeamDetails from "../../Components/Team-Tech/Details/TeamDetails";
import "./Team.css";

export default function Team() {
  return (
    <div className="team">
      <div className="headingGL">Team Techspardha</div>
      <div className="sub-team-heading">
        "Meet the People who worked countless hours behind the scenes to bring
        you the Spectacle, that is Techspardha, the tech-fest of NIT
        kurukshetra."
      </div>
      <TeamAnimation />
      <TeamDetails />
    </div>
  );
}
