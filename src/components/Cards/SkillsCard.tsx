import "../Skills/skills.css";
interface SkillsCardProps {
  icon: string;
  title: string;
}
const SkillsCard = ({ icon, title }: SkillsCardProps) => {
  return (
    <div className="skills-card">
      <i className={icon}></i>
      <h3>{title}</h3>
    </div>
  );
};

export default SkillsCard;
