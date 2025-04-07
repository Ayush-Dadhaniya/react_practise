import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (data) => {
    await sleep(5000); // 5-second delay
    console.log("Submitted Data:", data);
  };

  return (
    <>
      {isSubmitting && <p>Loading...</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name:</label>
        <input className="m-2 border-2 rounded-2xl" {...register("username", { required: "Name is required" })} />
        {errors.username && <span>{errors.username.message}</span>}
        <br />

        <label>Password:</label>
        <input className="m-2 border-2 rounded-2xl"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 3, message: "Bhai ocho ma ochu 3 che" },
            maxLength: { value: 8, message: "Maap ma length rakh" },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <br />

        <input className="m-2 p-2 border-2 rounded-2xl" type="submit" disabled={isSubmitting} />
      </form>
    </>
  );
}
