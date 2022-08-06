import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { inputClass, TextInput } from "./input";

const paymentSchema = z.object({
  cardholder_name: z.string(),
  card_number: z
    .number({
      required_error: "Card Number is required",
      invalid_type_error: "Wrong format, numbers only",
    })
    .int()
    .nonnegative()
    .transform((val) =>
      val.toString().replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4")
    ),
  date_month: z
    .number({ required_error: "Can't be blank" })
    .int()
    .nonnegative()
    .max(12),
  date_year: z
    .number({ required_error: "Can't be blank" })
    .int()
    .nonnegative()
    .min(2000),
  cvc: z
    .number({ required_error: "Can't be blank" })
    .int()
    .nonnegative()
    .min(111)
    .max(999),
});

const PaymentForm = () => {
  const { register, formState } = useForm({
    defaultValues: {
      cardholder_name: "",
      card_number: undefined,
      date_month: undefined,
      date_year: undefined,
      cvc: undefined,
    },
    resolver: zodResolver(paymentSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  return (
    <form className="md:max-w-sm" method="post">
      <TextInput
        label="Cardholder Name"
        placeholder="e.g. Jane Appleseed"
        {...register("cardholder_name")}
        error={formState.errors.cardholder_name?.message}
      />
      <TextInput
        label="Card Number"
        placeholder="e.g. 1234 5678 9123 0000"
        className="mt-4"
        {...register("card_number", {
          onChange(e) {
            e.target.value = e.target.value
              .split(" ")
              .join("")
              .replace(
                /(\d{1,4})?(\d{1,4})?(\d{1,4})?(\d{1,4})?/,
                "$1 $2 $3 $4"
              );
          },
        })}
        error={formState.errors.card_number?.message}
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
        </div>
        <TextInput
          label="CVC"
          placeholder="e.g. 123"
          {...register("cvc")}
          error={formState.errors.cvc?.message}
        />
      </section>

      <button
        type="submit"
        className="w-full mt-7 rounded-lg py-4 md:py-3 px-6 text-center text-white bg-neutral-very-dark-violet"
      >
        Confirm
      </button>
    </form>
  );
};

export default PaymentForm;
