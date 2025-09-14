import { useCallback, useEffect, useState } from "react";

function App() {

  const [textLength, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [password, setPassword] = useState("");

  // Now generatePassword only changes when the dependencies change
  const generatePassword = useCallback(() => {
    let charset = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    let newPassword = "";

    if (includeNumbers) charset += "0123456789";
    if (includeSpecialChars) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    for (let i = 0; i < textLength; i++) 
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));

    setPassword(newPassword);
  }, [includeNumbers, includeSpecialChars, textLength]);

  // useEffect(() => {
  //   generatePassword();
  // }, []);

  // useEffect(() => {
  //   generatePassword();
  // }, [textLength, includeNumbers, includeSpecialChars]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]); 

  // When the component mounts → useEffect runs → generates a password.
  // When textLength, includeNumbers, or includeSpecialChars changes 
  // → generatePassword function reference changes → useEffect runs → generates a new password.

  return (
    <>
      <h1 className="text-center text-4xl m-6">Password Generator</h1>

      <div
        className="p-5 rounded-lg shadow-md w-full max-w-2xl mx-auto flex flex-col justify-around items-center gap-4"
        style={{ background: "#44444E", color: "#e1e8e7" }}>

        <div className="flex gap-2 w-full max-w-md">
          <input type="text" className="flex-1 p-2 rounded border text-black" style={{background: "#D3DAD9"}} 
          readOnly
          value={password} />
          <button
            className="rounded-sm p-2 shadow-xl cursor-pointer transform transition duration-300 ease-in-out hover:scale-105"
            style={{ background: "#715A5A" }}>
            Copy
          </button>
        </div>

        <div className="flex flex-col gap-3 items-center">

          <div className="flex items-center gap-2">
            <label>Length: {textLength}</label>
            <input type="range" className="ml-2" 
            min={8}
            max={24}
            value={textLength}
            onChange={(e) => setLength(e.target.valueAsNumber)} />
          </div>

          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)} />
              Include Numbers
            </label>

            <label className="flex items-center gap-1">
              <input type="checkbox" 
              checked={includeSpecialChars}
              onChange={(e) => setIncludeSpecialChars(e.target.checked)} />
              Include Special Characters
            </label>
          </div>

        </div>

        <div>
          <button
            className="rounded-sm p-2 shadow-xl cursor-pointer transform transition duration-300 ease-in-out hover:scale-105"
            style={{ background: "#715A5A" }} 
            onClick={generatePassword} >
            Generate
          </button>
        </div>
        
      </div>
    </>
  );
}

export default App;
