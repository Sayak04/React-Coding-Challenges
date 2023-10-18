import React, { useState } from "react";

interface ActivityObject {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
}

interface ExpandableListItemProps {
  activity: ActivityObject;
}

const ExpandableListItem: React.FC<ExpandableListItemProps> = ({
  activity,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className="item-container">
        {activity?.activity}
        {"  "}
        <button className="btn" onClick={handleClick}>
          {isExpanded ? "Collapse" : "Expand"}
        </button>
        {isExpanded && (
          <ul>
            {Object.keys(activity).map((item) => (
              <li key={item}>{`${item} : ${activity[item]}`}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExpandableListItem;
