import clsx from "clsx";
import { forwardRef, useId } from "react";

export type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  classNames?: {
    root?: string;
    input?: string;
    label?: string;
    error?: string;
  };
};

export const inputClass = clsx(
  "py-3 md:py-2 px-5 md:px-4 font-medium border rounded-md border-neutral-light-grayish-violet focus:border-neutral-very-dark-violet focus-within:outline-none"
);

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, classNames, label, error, ...props }, ref) => {
    const id = useId();

    return (
      <div className={clsx(className, classNames?.root)}>
        {label && (
          <label
            htmlFor={props.id ?? id}
            className={clsx(
              "uppercase font-medium tracking-widest",
              classNames?.label
            )}
          >
            {label}
          </label>
        )}
        <input
          type="text"
          name="cardholder_name"
          id={props.id ?? id}
          className={clsx(
            "w-full mt-1",
            inputClass,
            classNames?.input,
            error && "!border-primary-red"
          )}
          placeholder="e.g. Jane Appleseed"
          ref={ref}
          {...props}
        />
        {error && (
          <p
            className={clsx("text-xs text-primary-red mt-1", classNames?.error)}
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);
