interface IFormInputProps {
  label: string;
  id: string;
  register: any;
  error?: string;
  watchValue?: string;
  charactersRemaining?: number;
  type?: "text" | "email" | "textarea";
  placeholder?: string;
}

export const FormInput = ({
  label,
  id,
  register,
  error,
  watchValue,
  charactersRemaining = 0,
  type = "text",
  placeholder,
}: IFormInputProps) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <div>
      {type === "textarea" ? (
        <textarea
          id={id}
          {...register}
          placeholder={placeholder}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
        />
      ) : (
        <input
          id={id}
          type={type}
          {...register}
          placeholder={placeholder}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
        />
      )}
    </div>

    {!error && watchValue && charactersRemaining > 0 && (
      <p className="text-sm text-gray-500">
        {charactersRemaining} more characters needed
      </p>
    )}

    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);
