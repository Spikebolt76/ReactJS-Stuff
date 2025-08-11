// solution - 1 :

// import { useState } from "react";

// export default function Scoreboard() {
//   const [player, setPlayer] = useState({
//     firstName: "Ranjani",
//     lastName: "Shettar",
//     score: 10,
//   });

//   function handlePlusClick(e) {
//     setPlayer({
//       ...player,
//       score: player.score + 1,
//     });
//   }

//   function handleFirstNameChange(e) {
//     setPlayer({
//       ...player,
//       firstName: e.target.value,
//     });
//   }

//   function handleLastNameChange(e) {
//     setPlayer({
//       ...player,
//       lastName: e.target.value,
//     });
//   }

//   return (
//     <>
//       <label>
//         Score: <b>{player.score}</b>{" "}
//         <button onClick={handlePlusClick}>+1</button>
//       </label>
//       <label>
//         First name:
//         <input value={player.firstName} onChange={handleFirstNameChange} />
//       </label>
//       <label>
//         Last name:
//         <input value={player.lastName} onChange={handleLastNameChange} />
//       </label>
//     </>
//   );
// }

// solution - 2 :

import { useState } from "react";

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });

  function updatePlayer(e) {
    setPlayer({
      ...player,
      [e.target.name]:
        e.target.name === "score" ? player.score + 1 : e.target.value,
    });
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>{" "}
        <button name="score" onClick={updatePlayer}>
          +1
        </button>
      </label>
      <label>
        First name:
        <input
          value={player.firstName}
          name="firstName"
          onChange={updatePlayer}
        />
      </label>
      <label>
        Last name:
        <input
          value={player.lastName}
          name="lastName"
          onChange={updatePlayer}
        />
      </label>
    </>
  );
}

// The problem with handlePlusClick was that it mutated the player object.
// As a result, React did not know that there’s a reason to re-render, and did not update the score on the screen.
// This is why, when you edited the first name, the state got updated, triggering a re-render which also updated the score on the screen.

// The problem with handleLastNameChange was that it did not copy the existing ...player fields into the new object.
// This is why the score got lost after you edited the last name.
