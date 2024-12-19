import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IContactFormInput } from "./form.types";
import { schema } from "./form.schema";
import * as yup from "yup";
import { FormInput } from "../../../UI/FormInput";
import { useState } from "react";
import { Button } from "../../../UI/Button";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
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
    reset();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 sm:p-8">
        {isSubmitted && (
          <div className="mb-6 p-4 bg-green-50 text-primary rounded-md">
            Thank you! Your message has been sent successfully.
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <h1 className="text-2xl font-bold text-gray-900">Contact Us</h1>

          <FormInput
            label="Full Name"
            id="fullName"
            register={register("fullName")}
            error={errors.fullName?.message}
            watchValue={watchFields.fullName}
            charactersRemaining={getCharactersRemaining("fullName")}
            placeholder="Your full name"
          />

          <FormInput
            label="Email"
            id="email"
            register={register("email")}
            error={errors.email?.message}
            watchValue={watchFields.email}
            type="email"
            placeholder="your.email@example.com"
          />

          <FormInput
            label="Subject"
            id="subject"
            register={register("subject")}
            error={errors.subject?.message}
            watchValue={watchFields.subject}
            charactersRemaining={getCharactersRemaining("subject")}
            placeholder="What is your message about?"
          />

          <FormInput
            label="Message"
            id="body"
            register={register("body")}
            error={errors.body?.message}
            watchValue={watchFields.body}
            charactersRemaining={getCharactersRemaining("body")}
            type="textarea"
            placeholder="Your message here..."
          />

          <Button type="submit" variant="primary" fullWidth>
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
