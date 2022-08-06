import cardFront from "~/assets/images/bg-card-front.png";
import cardBack from "~/assets/images/bg-card-back.png";
import { inputClass, TextInput } from "./components/input";
import PaymentForm from "./components/form";

function App() {
  return (
    <main className="p-5 md:flex">
      <div className="h-60 -m-5 md:mr-auto p-6 bg-main-mobile md:bg-main-desktop bg-cover relative flex-side md:min-h-screen">
        <div className="absolute top-6 right-6 md:top-auto md:bottom-36 md:right-0 md:translate-x-1/2 md:shadow-2xl w-3/4 md:w-11/12">
          <img src={cardBack} alt="Card Back" className="w-full" />
          <p className="text-white text-xs absolute top-1/2 -translate-y-1/2 right-10">
            000
          </p>
        </div>
        <div className="absolute left-6 md:left-auto md:right-0 md:translate-x-1/3 md:bottom-auto md:top-36 md:shadow-2xl -bottom-12 w-3/4 md:w-11/12">
          <img src={cardFront} alt="Card Front" className="w-full" />
          <div className="absolute left-6 top-6 md:top-4 md:left-4 flex items-center gap-4">
            <div className="bg-white w-8 h-8 md:w-6 md:h-6 rounded-full" />
            <div className="w-4 h-4 rounded-full border border-neutral-light-grayish-violet" />
          </div>
          <p className="absolute left-6 md:left-4 bottom-14 md:bottom-12 text-white text-xl md:text-lg tracking-widest">
            0000 0000 0000 0000
          </p>
          <p className="absolute left-6 md:left-4 bottom-6 md:bottom-4 text-neutral-light-grayish-violet text-xs uppercase tracking-widest">
            Jane Appleseed
          </p>
          <p className="absolute right-6 md:right-4 bottom-6 md:bottom-4 text-neutral-light-grayish-violet text-xs uppercase tracking-widest">
            00/00
          </p>
        </div>
      </div>

      <section className="p-2 mt-24 md:mt-0 flex-1 md:grid place-items-center">
        <PaymentForm />
      </section>
    </main>
  );
}

export default App;
