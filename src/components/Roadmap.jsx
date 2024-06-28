import { useState, useEffect } from "react";
import Prompter from "./Prompter";
import RoadmapList from "./RoadmapList";
import { useLoaderData } from "react-router-dom";

export default function Roadmap({ cardId }) {
  const [goals, setGoals] = useState({ data: [], cardId: 0 });
  const { cardId1 } = useLoaderData();

  useEffect(() => {
    // Load goals on first visit
    console.log(cardId1);
    if (cardId1 !== -1) {
      console.log(JSON.parse(localStorage.getItem("goalsArray")));
      setGoals(
        JSON.parse(localStorage.getItem("goalsArray")).filter(
          (goals) => goals.cardId === cardId1
        )[0]
      );
    }
  }, [cardId1, setGoals]);

  return (
    <div className="w-screen flex flex-col items-center">
      <Prompter setGoals={setGoals} />
      <RoadmapList goals={goals} setGoals={setGoals} />
    </div>
  );
}
