import React, { useState } from "react";
import Header from "@/components/custom/Header";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { SelectBudgetOptions, SelectTravelList } from "@/constants/options"; // Ensure SelectTravelList is imported

function CreateTrip() {
  const [place, setPlace] = useState(null); // Manage place selection
  const [formData, setFormData] = useState({ budget: null, traveler: null }); // Initialize formData state

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <>
      <Header />
      <div className="pt-16 min-h-screen sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
        <h2 className="text-3xl font-bold">Tell us your travel preferences</h2>
        <p className="mt-3 text-gray-500 text-xl">
          Provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
        </p>
        <div>
          <div className="mt-10 flex flex-col gap-10">
            <h2 className="text-xl my-3 font-medium">What is your destination of choice?</h2>
            {/* Google Places Autocomplete input */}
            <GooglePlacesAutocomplete
              apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
              selectProps={{
                value: place,
                onChange: (v) => {
                  setPlace(v);
                  console.log(v);
                },
              }}
            />
          </div>

          {/* Native input field for number of days */}
          <div className="mt-10">
            <label className="text-xl my-3 font-medium">How many days are you planning your trip?</label>
            <input
              placeholder="Ex. 3"
              type="number"
              min="1"
              className="border rounded-md p-2 mt-3 w-full bg-white"
            />
          </div>

          <div>
            <label className="text-xl my-3 font-medium">What is Your Budget?</label>
            <p>The budget is exclusively allocated for activities and dining purposes.</p>
            <div className="grid grid-cols-3 gap-5 mt-5 mb-5">
              {SelectBudgetOptions.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleInputChange("budget", item.title)}
                  className={`cursor-pointer p-4 border rounded-lg hover:shadow-lg
                  ${formData.budget === item.title ? "shadow-lg border-cyan-500" : ""}
                  `}
                >
                  <h2 className="text-3xl">{item.icon}</h2>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <h2 className="text-sm text-gray-500">{item.desc}</h2>
                </div>
              ))}
            </div>

            <label className="text-xl font-medium my-3">Who do you plan on traveling with on your next adventure?</label>
            <div className="grid grid-cols-3 gap-5 mt-5">
              {SelectTravelList.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleInputChange("traveler", item.people)}
                  className={`cursor-pointer p-4 border rounded-lg hover:shadow-lg
                  ${formData.traveler === item.people ? "shadow-lg border-cyan-500" : ""}
                  `}
                >
                  <h2 className="text-3xl">{item.icon}</h2>
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <h2 className="text-sm text-gray-500">{item.desc}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateTrip;
