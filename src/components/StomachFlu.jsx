import stomachFluImage from "../components/1.png";

const StomachFlu = () => {
  return (
    <>
      
      <div className="relative min-h-screen flex flex-col justify-center items-center p-4 overflow-hidden bg-white">
       
        <h1 className="z-10 mt-5 text-4xl md:text-5xl font-bold text-gray-800 mb-8">
          Stomach Flu IV
        </h1>

        
        <div className="absolute w-full h-[20vh] md:-skew-y-20 -skew-y-25 bg-gradient-to-r from-blue-300 via-purple-400 to-blue-300 md:-mt-44 -mt-[180%]"></div>

       
        <div className="z-10 mt-7 max-w-6xl w-full flex flex-col md:flex-row md:items-start md:justify-between space-y-8 md:space-y-0">
          
          <div className="relative md:w-1/2 md:ml-8 flex justify-center items-center">
           
            <div className="absolute md:h-[37rem] md:w-[28rem] w-[105%] h-[38rem]  bg-white bg-opacity-25 border-4 border-blue-300 rounded-3xl"></div>

           
            <div className="relative w-[93%] md:w-[25rem] md:h-[34rem] bg-white  rounded-3xl shadow-lg">
              <img
                src={stomachFluImage}
                alt="Stomach Flu IV"
                className="ml-[10%] w-72 md:-mt-6 md:w-80 h-[30rem]"
              />
              <h3 className="text-lg ml-3 font-semibold text-blue-400">
                Ingredients
              </h3>
              <p className="ml-3  text-gray-600 w-[91%]">
                1000 ml Normal Saline | B12 | B-complex | Vitamin C | Pepcid |
                Anti-Nausea Medication
              </p>
            </div>
          </div>

          
          <div className=" md:ml-8 md:w-1/2 p-6">
            <h2 className="md:-mt-12 text-3xl font-bold text-gray-800">Stomach Flu IV</h2>
            <p className="mt-2 text-black font-bold">
              Stomach Flu IV Treatment - Relief from All Symptoms.
            </p>
            <p className="mt-4 text-gray-500">
              Viral gastroenteritis, commonly known as stomach flu, is an
              intestinal infection marked by watery diarrhea, abdominal cramps,
              nausea or vomiting, and sometimes fever. The condition is often
              caused by contact with an infected person or through ingestion of
              contaminated food or water.
            </p>
            <p className="mt-4 text-gray-500">
              Intravenous (IV) therapy is a method of treatment where fluids are
              injected directly into a vein to provide immediate hydration,
              restore electrolytes, and deliver medications.This treatment can
              be crucial for patients who are unable yo keep fluids down due to
              nause and vomiting, thereby reducing the risks of dehydration
              associated with stomact flu.
            </p>

            
            <div className="mt-8">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600">
                View Therapies
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StomachFlu;
