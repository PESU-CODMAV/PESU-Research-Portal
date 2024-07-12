import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const ConferenceAndJournels = () => {
  const [Loading, setLoading] = useState(true);
  const [professor, setprofessor] = useState([]);
  const profData = async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/v1/api/getProfessors"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setprofessor(data);
    } catch (err) {
      throw new Error(err);
    }
  };
  useEffect(() => {
    setLoading(true);
    profData();
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
        {professor.map((item) => (
          <div>
            <div className="flex items-center justify-center">
              <h1 className="text-2xl">{item.name}</h1>
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
