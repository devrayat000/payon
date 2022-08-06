import cardFront from "~/assets/images/bg-card-front.png";
import cardBack from "~/assets/images/bg-card-back.png";
import { TextInput } from "./components/input";

function App() {
  return (
    <main className="p-5 md:flex">
      <div className="h-60 -m-5 md:mr-auto p-6 bg-main-mobile md:bg-main-desktop bg-cover relative flex-side md:min-h-screen">
        <div className="absolute top-6 right-6 md:top-auto md:bottom-44 md:right-0 md:translate-x-1/2 md:shadow-2xl w-3/4 md:w-11/12">
          <img src={cardBack} alt="Card Back" className="w-full" />
          <p className="text-white text-xs absolute top-1/2 -translate-y-1/2 right-10">
            000
          </p>
        </div>
        <div className="absolute left-6 md:left-auto md:right-0 md:translate-x-1/3 md:bottom-auto md:top-44 md:shadow-2xl -bottom-12 w-3/4 md:w-11/12">
          <img src={cardFront} alt="Card Front" className="w-full" />
          <div className="absolute left-6 top-6 md:top-4 md:left-4 flex items-center gap-4">
            <div className="bg-white w-8 h-8 md:w-6 md:h-6 rounded-full" />
            <div className="w-4 h-4 rounded-full border border-neutral-light-grayish-violet" />
          </div>
          <p className="absolute left-6 md:left-4 bottom-14 md:bottom-12 text-white text-xl md:text-base tracking-widest">
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
        <form className="md:max-w-sm" method="post">
          <TextInput
            label="Cardholder Name"
            name="cardholder_name"
            placeholder="e.g. Jane Appleseed"
          />
          <TextInput
            label="Cardholder Number"
            name="cardholder_number"
            placeholder="e.g. 1234 5678 9123 0000"
            className="mt-4"
          />
          <section className="mt-4 grid grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="date"
                className="uppercase font-medium tracking-widest"
              >
                Exp Date (MM/YY)
              </label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <input
                  type="text"
                  name="date_month"
                  id="date"
                  className="py-3 md:py-2 px-5 md:px-4 border rounded-md border-neutral-light-grayish-violet"
                  placeholder="MM"
                />
                <input
                  type="to"
                  name="date_year"
                  id="date"
                  className="py-3 md:py-2 px-5 md:px-4 border rounded-md border-neutral-light-grayish-violet"
                  placeholder="YY"
                />
              </div>
            </div>
            <TextInput label="CVC" placeholder="e.g. 123" name="cvc" />
          </section>

          <button
            type="submit"
            className="w-full mt-7 rounded-lg py-4 md:py-3 px-6 text-center text-white bg-neutral-very-dark-violet"
          >
            Confirm
          </button>
        </form>
      </section>
    </main>
  );
}

export default App;
