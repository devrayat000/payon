import clsx from "clsx";
import { useId } from "react";

export type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  classNames?: {
    root?: string;
    input?: string;
    label?: string;
  };
};

export const TextInput: React.FC<TextInputProps> = ({
  className,
  classNames,
  label,
  ...props
}) => {
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
          "w-full py-3 px-5 border rounded-md border-neutral-light-grayish-violet mt-1",
          classNames?.input
        )}
        placeholder="e.g. Jane Appleseed"
        {...props}
      />
    </div>
  );
};
