import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const ConferenceAndJournels = () => {
  const [Loading, setLoading] = useState(true);
  const [publications, setpublications] = useState([]);
  const publicationData = async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/v1/api/getPublications"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setpublications(data);
    } catch (err) {
      throw new Error(err);
    }
  };
  useEffect(() => {
    setLoading(true);
    publicationData();
    setLoading(false);
  }, []);
  if (Loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="grid grid-cols-4">
        {publications.map((item) => (
          <div>
            <div className="flex items-center justify-center">
              <h1 className="text-2xl">{item.First_Name}</h1>
            </div>
            {item.publications && (
              <div>
                {item.publications.map((p) => (
                  <div>{p.title}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConferenceAndJournels;
