import "./socialPanel.css";
// import facebook from "../../assets/icons/facebook.svg";
import linkedIn from "../../assets/icons/linkedIn.svg";
import github from "../../assets/icons/github.svg";
import twitter from "../../assets/icons/twitter.svg";

const SocialPanel = () => (
  <div className="socialPanel">
    <img src={github} />
    <img src={linkedIn} />
    <img src={twitter} />
    {/* <img src={facebook} /> */}
  </div>
);

export default SocialPanel;
