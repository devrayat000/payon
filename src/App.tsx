import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import cardFront from "~/assets/images/bg-card-front.png";
import cardBack from "~/assets/images/bg-card-back.png";
import iconComplete from "~/assets/images/icon-complete.svg";
import { inputClass, TextInput } from "./components/input";

const paymentSchema = z.object({
  cardholder_name: z.string({ required_error: "Cardholder Name is required" }),
  card_number: z
    .string({
      required_error: "Card Number is required",
    })
    .regex(/\d{4}?\s?\d{4}?\s?\d{4}?\s?\d{4}?/, {
      message: "Wrong format, numbers only",
    }),
  date_month: z
    .string({ required_error: "Can't be blank" })
    .regex(/(0[0-9])|(1[0-2])/, { message: "Invalid month" }),
  date_year: z
    .string({ required_error: "Can't be blank" })
    .regex(/(20[0-9]{2})/, { message: "Invalid year" }),
  cvc: z
    .string({ required_error: "Can't be blank" })
    .length(3, { message: "Must be 3 characters" }),
});

function App() {
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      cardholder_name: undefined,
      card_number: undefined,
      date_month: undefined,
      date_year: undefined,
      cvc: undefined,
    },
    resolver: zodResolver(paymentSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const name = useWatch({ name: "cardholder_name", control });
  const cardNumber = useWatch({ name: "card_number", control });
  const dateMonth = useWatch({ name: "date_month", control });
  const dateYear = useWatch({ name: "date_year", control });
  const cvc = useWatch({ name: "cvc", control });

  const [completed, setCompleted] = useState(false);

  return (
    <main className="p-5 md:flex">
      <div className="h-60 -m-5 md:mr-auto p-6 bg-main-mobile md:bg-main-desktop bg-cover relative flex-side md:min-h-screen">
        <div className="absolute top-6 right-6 md:top-auto md:bottom-36 md:right-0 md:translate-x-1/2 md:shadow-2xl w-3/4 md:w-11/12">
          <img src={cardBack} alt="Card Back" className="w-full" />
          <p className="text-white text-xs absolute top-1/2 -translate-y-1/2 right-10">
            {cvc || "000"}
          </p>
        </div>
        <div className="absolute left-6 md:left-auto md:right-0 md:translate-x-1/3 md:bottom-auto md:top-36 md:shadow-2xl -bottom-12 w-3/4 md:w-11/12">
          <img src={cardFront} alt="Card Front" className="w-full" />
          <div className="absolute left-6 top-6 md:top-4 md:left-4 flex items-center gap-4">
            <div className="bg-white w-8 h-8 md:w-6 md:h-6 rounded-full" />
            <div className="w-4 h-4 rounded-full border border-neutral-light-grayish-violet" />
          </div>
          <p className="absolute left-6 md:left-4 bottom-14 md:bottom-12 text-white text-xl md:text-lg tracking-widest">
            {cardNumber || "0000 0000 0000 0000"}
          </p>
          <p className="absolute left-6 md:left-4 bottom-6 md:bottom-4 text-neutral-light-grayish-violet text-xs uppercase tracking-widest">
            {name || "Jane Appleseed"}
          </p>
          <p className="absolute right-6 md:right-4 bottom-6 md:bottom-4 text-neutral-light-grayish-violet text-xs uppercase tracking-widest">
            {dateMonth || "00"}/{dateYear || "00"}
          </p>
        </div>
      </div>

      <section className="p-2 mt-24 md:mt-0 flex-1 md:grid place-items-center">
        {!completed ? (
          <form
            className="md:max-w-sm"
            method="post"
            onSubmit={handleSubmit(() => {
              setCompleted(true);
            })}
          >
            <TextInput
              label="Cardholder Name"
              placeholder="e.g. Jane Appleseed"
              {...register("cardholder_name")}
              error={errors.cardholder_name?.message}
            />
            <TextInput
              label="Card Number"
              placeholder="e.g. 1234 5678 9123 0000"
              className="mt-4"
              {...register("card_number", {
                onChange(e) {
                  e.target.value = e.target.value
                    .trim()
                    .split(" ")
                    .join("")
                    .replace(
                      /(\d{1,4})?(\d{1,4})?(\d{1,4})?(\d{1,4})?/,
                      "$1 $2 $3 $4"
                    )
                    .trim();
                },
              })}
              error={errors.card_number?.message}
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
                    id="date"
                    className={inputClass}
                    placeholder="MM"
                    {...register("date_month")}
                  />
                  <input
                    type="to"
                    id="date"
                    className={inputClass}
                    placeholder="YY"
                    {...register("date_year")}
                  />
                </div>
                {(errors.date_month?.message || errors.date_year?.message) && (
                  <p className="text-xs text-primary-red mt-1">
                    {errors.date_month?.message || errors.date_year?.message}
                  </p>
                )}
              </div>
              <TextInput
                label="CVC"
                placeholder="e.g. 123"
                {...register("cvc")}
                error={errors.cvc?.message}
              />
            </section>

            <button
              type="submit"
              className="w-full mt-7 rounded-lg py-4 md:py-3 px-6 text-center text-white bg-neutral-very-dark-violet"
            >
              Confirm
            </button>
          </form>
        ) : (
          <div>
            <section className="grid place-items-center">
              <img src={iconComplete} alt="Check" />
              <h3 className="text-xl font-medium uppercase mt-6">Thank You!</h3>
              <p className="text-neutral-dark-grayish-violet mt-2">
                We've added your card details
              </p>
            </section>
            <button className="w-full mt-7 rounded-lg py-4 md:py-3 px-6 text-center text-white bg-neutral-very-dark-violet" onClick={() => {
              reset();
              setCompleted(false);
            }}>
              Continue
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
