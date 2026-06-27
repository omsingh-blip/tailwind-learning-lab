const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div id="profileCard" className="w-full max-w-md rounded-xl border border-slate-200 bg-white px-10 py-12 flex flex-col items-center gap-8">

        <div id="avatarScreen" className="w-25 h-25 border border-slate-400 bg-blue-50 rounded-full flex justify-center items-center text-3xl font-bold text-blue-400 ">OS</div>

        <div id="userName" className="flex flex-col items-center">
          <p className="text-2xl font-bold text-slate-700" >Om Singh</p>
          <p className="text-sm font-medium text-slate-500">Web Developer</p>
        </div>

        <div id="skillSection" className=" flex flex-col flex gap-3 justify-center items-center">
          <h3 className="mt-4 text-slate-700 font-semibold font-serif ">Skills</h3>
          <div className="flex flex-wrap gap-4">
            <span className=" border border-slate-200 rounded-2xl px-3 py-1 bg-blue-50 text-blue-500">JavaScript</span>
            <span className=" border border-slate-200 rounded-2xl px-3 py-1 bg-blue-50 text-blue-500">Tailwind CSS</span>
            <span className=" border border-slate-200 rounded-2xl px-3 py-1 bg-blue-50 text-blue-500">React</span>
          </div>
        </div>

        <div id="buttonSection" className="flex gap-6 ">
          <button className="border border-slate-200 rounded-lg py-2 px-4 bg-blue-500 text-white hover:bg-blue-600 transition duration-300 cursor-pointer" >Contact</button>
          <button className="border border-slate-200 rounded-lg py-2 px-4 bg-gray-50 text-slate-600 hover:bg-blue-100 transition cursor-pointer">Resume</button>
        </div>

      </div>
    </div>
  );
};

export default App;