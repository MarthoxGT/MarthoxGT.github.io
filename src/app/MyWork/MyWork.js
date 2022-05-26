import React, { useState } from "react";
import WorkSlider from "../../components/WorkSlider/WorkSlider";
import SearchBar from "../../components/SearchBar/SearchBar";

import "./myWork.css";

const MyWork = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="myWork">
      <SearchBar setSearchQuery={setSearchQuery} />
      <WorkSlider searchQuery={searchQuery} />
    </div>
  );
};

export default MyWork;
