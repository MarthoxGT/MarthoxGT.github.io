import "./socialPanel.css";
import linkedIn from "../../assets/icons/linkedIn.svg";
import github from "../../assets/icons/github.svg";
import twitter from "../../assets/icons/twitter.svg";

const SocialPanel = () => {
  const { githubProfile } = require("../../assets/constants/urls.json");
  const { linkedInPorfile } = require("../../assets/constants/urls.json");
  const { twitterProfile } = require("../../assets/constants/urls.json");

  return (
    <div className="socialPanel">
      <img
        className="socialIcon"
        alt=""
        src={github}
        onClick={() => window.open(githubProfile, "_blank").focus()}
      />
      <img
        className="socialIcon"
        alt=""
        src={linkedIn}
        onClick={() => window.open(linkedInPorfile, "_blank").focus()}
      />
      <img
        className="socialIcon"
        alt=""
        src={twitter}
        onClick={() => window.open(twitterProfile, "_blank").focus()}
      />
      {/* <img src={facebook} /> */}
    </div>
  );
};
export default SocialPanel;
