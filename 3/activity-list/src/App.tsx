import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import ExpandableListItem from "./ExpandableListItem";

interface ActivityObject {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
}

function App() {
  const [activityList, setActivityList] = useState<ActivityObject[]>([]);

  const apiUrl: string = "https://www.boredapi.com/api/activity";

  const handleSubmit = () => {
    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data;
        const newActivityList = [...activityList, data];
        setActivityList(newActivityList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="btn-container">
        <button className="btn" onClick={handleSubmit}>
          Generate Activity
        </button>
      </div>
      <div className="activity-container">
        <ul>
          {activityList.map((activity) => {
            return (
              <div className="expand">
                <li key={activity.key}>
                  <ExpandableListItem activity={activity} />
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
