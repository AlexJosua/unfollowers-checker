import { useState } from "react";
import FileUpload from "../components/fileUploads";

const Home = () => {
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  console.log("Followers HTML:", followers.slice(0, 300));
  console.log("Following HTML:", following.slice(0, 300));

  return (
    <div>
      <h1>Instagram Unfollowers Checker</h1>

      <FileUpload label={"upload Followers HTML"} onfileRead={setFollowers} />
      <FileUpload label={"upload Following HTML"} onfileRead={setFollowing} />

      <p>Followers Loaded : {followers ? "Yes" : "No"}</p>
      <p>Following Loaded : {following ? "Yes" : "No"}</p>
    </div>
  );
};

export default Home;
