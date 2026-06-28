import { Check } from "lucide-react";

const features = [
  "Unlimited Projects",
  "AI Code Review",
  "Team Collaboration",
  "Priority Support",
  "100 GB Storage",
];

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-black flex items-center justify-center p-6">
      <div
        className="
        w-full
        max-w-sm
        rounded-2xl
        bg-white
        p-8 shadow-xl
        shadow-white
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-2xl
        cursor-pointer
      "
      >
  
        <div className="flex justify-center">
          <span className="rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            Most Popular
          </span>
        </div>


        <div className="mt-6 text-center">
          <h2 className="text-3xl font-bold text-slate-800">
            Pro Plan
          </h2>

          <div className="mt-4">
            <span className="text-5xl font-extrabold text-slate-900 font-serif">
              $19
            </span>

            <span className="text-lg text-slate-500">
              /month
            </span>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            Perfect for developers and small teams.
          </p>
        </div>


        <div className="my-8 border-t border-slate-200"></div>

   
        <div className="space-y-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3"
            >
              <Check className="h-5 w-5 text-green-500" />

              <span className="text-slate-700">
                {feature}
              </span>
            </div>
          ))}
        </div>

 
        <button
          className="
          mt-8
          w-full
          rounded-xl
          bg-indigo-600
          py-3
          text-lg
          font-semibold
          text-white
          transition-all
          duration-300
          hover:bg-indigo-700
          hover:shadow-lg
        "
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

export default App;