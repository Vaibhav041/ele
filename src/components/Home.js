import React, { useEffect, useState } from "react";
import axios from "axios";
import img from "../img.jpeg";
import FadeLoader from "react-spinners/FadeLoader";
import { useNavigate } from "react-router-dom";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("x");
  const [building, setBuilding] = useState("x");
  const [so, setSo] = useState("x");
  const [booth, setBooth] = useState("x");
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("logged")) {
      navigate("/");
    }
  });

  const handle = async () => {
    setLoading(true);
    let data = await axios.get(
      `https://electionapp-92gq.onrender.com/voter/gett/${name}/${building}/${so}/${booth}`
    );
    setLoading(false);
    setShowResults(true);
    setResults(data.data);
  };
  return (
    <section className="flex flex-col h-screen bg-gray-200">
      <div className="flex justify-center mt-2">
        <img className="w-[160px] h-[160px]" src={img} alt="#" />
      </div>
      <div className="input flex flex-col gap-1 px-32 mb-10 mt-5">
        <input
          type="text"
          onChange={(e) => setName('*' +e.target.value)}
          placeholder="Name"
          className="p-1 rounded-lg"
        />
        <input
          type="text"
          onChange={(e) => setBuilding('*' +e.target.value)}
          placeholder="Address"
          className="p-1 rounded-lg"
        />
        <input
          type="text"
          onChange={(e) => setSo('*' +e.target.value)}
          placeholder="S/O"
          className="p-1 rounded-lg"
        />
        <input
          type="text"
          onChange={(e) => setBooth('*' +e.target.value)}
          placeholder="Booth"
          className="p-1 rounded-lg"
        />
        <button
          className="bg-gradient-to-r from-orange-500 to-green-500 mt-2 p-1 text-white rounded-xl"
          onClick={handle}
        >
          Search
        </button>
      </div>
      {showResults && (
        <>
          <h1 className="font-bold text-xl px-32">
            Showing {results.length} Results
          </h1>
          <div className="result h-[500px] overflow-y-scroll px-32">
            {results.map((item, index) => {
              return (
                <div
                  className="border border-black my-2 p-2 rounded-md"
                  key={index}
                >
                  <p>Name: {item.name}</p>
                  <p>Address: {item.building}</p>
                  <p>Father name: {item.fatherName}</p>
                  <p>Booth Number: {item.boothNumber}</p>
                  <p>Serial number: {item.id}</p>
                </div>
              );
            })}
          </div>{" "}
        </>
      )}
      <FadeLoader
        color="green"
        loading={loading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </section>
  );
};

export default Home;
