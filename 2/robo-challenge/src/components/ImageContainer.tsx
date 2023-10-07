import React, { useEffect, useState } from "react";
import useStore from "../../store";
import '../App.css';

const ImageContainer: React.FC = () => {
  const { title } = useStore();
  const [roboList, setRoboList] = useState<string[]>([]);

  useEffect(() => {
    if (title.length > 0) {
      const img_src: string = `https://robohash.org/${title}`;
      const newRoboList: string[] = [...roboList, img_src];
      setRoboList(newRoboList);
    }
  }, [title]);

  return (
    <div>
      <h4 style={{ textAlign: "center" }}>Robot List</h4>
      <div className="images">
        {roboList.length > 0 &&
          roboList.map((robot) => {
            return <img src={robot} alt="Robo Image" key={robot} />;
          })}
      </div>
    </div>
  );
};

export default ImageContainer;
