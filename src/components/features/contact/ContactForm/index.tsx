import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormInput } from "./form.types";
import { schema } from "./form.schema";

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Contact Us</h1>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <div>
              {" "}
              <input
                id="fullName"
                {...register("fullName")}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
              />
            </div>
            {errors.fullName && <p>{errors.fullName.message}</p>}
          </div>

          <div>
            <label htmlFor="subject">Subject</label>
            <div>
              <input
                id="subject"
                {...register("subject")}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
              />
            </div>{" "}
            {errors.subject && <p>{errors.subject.message}</p>}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <div>
              {" "}
              <input
                id="email"
                {...register("email")}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
              />
            </div>{" "}
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="body">Last Name</label>
            <div>
              {" "}
              <input
                id="body"
                {...register("body")}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
              />
            </div>{" "}
            {errors.body && <p>{errors.body.message}</p>}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MyForm;
