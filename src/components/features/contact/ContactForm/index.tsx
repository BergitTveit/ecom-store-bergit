import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IContactFormInput } from "./form.types";
import { schema } from "./form.schema";
import * as yup from "yup";
import { FormInput } from "../../../UI/FormInput";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IContactFormInput>({
    resolver: yupResolver(schema),
  });

  const watchFields = watch();

  const getMinLength = (field: keyof typeof schema.fields): number => {
    const fieldSchema = schema.fields[field] as yup.StringSchema;

    const minTest = fieldSchema
      .describe()
      .tests?.find((test) => test.name === "min");
    return (minTest?.params?.min as number) || 0;
  };

  const getCharactersRemaining = (
    field: keyof typeof schema.fields
  ): number => {
    const minLength = getMinLength(field);
    const currentLength = (watchFields[field] as string)?.length || 0;
    return minLength - currentLength;
  };

  const onSubmit: SubmitHandler<IContactFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Contact Us</h1>

          <FormInput
            label="Full Name"
            id="fullName"
            register={register("fullName")}
            error={errors.fullName?.message}
            watchValue={watchFields.fullName}
            charactersRemaining={getCharactersRemaining("fullName")}
            type="text"
          />

          <FormInput
            label="Email"
            id="email"
            register={register("email")}
            error={errors.email?.message}
            watchValue={watchFields.email}
            type="email"
          />
          <FormInput
            label="Subject"
            id="subject"
            register={register("subject")}
            error={errors.subject?.message}
            watchValue={watchFields.subject}
            charactersRemaining={getCharactersRemaining("subject")}
            type="textarea"
          />

          <FormInput
            label="Message"
            id="body"
            register={register("body")}
            error={errors.body?.message}
            watchValue={watchFields.body}
            charactersRemaining={getCharactersRemaining("body")}
            type="textarea"
          />

          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
