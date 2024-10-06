import { useForm } from "react-hook-form";
import FormFieldError from "../components/shared/FormFieldError";
import SeoContent from "../components/shared/SeoContent";

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        if (!data) return;
    };

    const FIELD_REQUIRED = "This field is required";

    const FORMINPUT_LIST = [
        {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "Enter your email",
            rules: {
                required: {
                    value: true,
                    message: FIELD_REQUIRED,
                },
                pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Please enter a valid email",
                },
            },
            isLogin: true,
        },
        {
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "Enter your password",
            rules: {
                required: {
                    value: true,
                    message: FIELD_REQUIRED,
                },
                minLength: {
                    value: 3,
                    message: "Password must be at least 3 characters",
                },
            },
            isLogin: true,
        },
    ];

    const LOGIN_INPUT_LIST =
        FORMINPUT_LIST.filter((input) => input.isLogin) || [];

    return (
        <section className="section">
            <SeoContent title="Login" />
            <form
                className="mx-auto min-h-[500px] max-w-[400px] space-y-8 rounded-xl p-14 text-lg shadow-lg"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className="text-2xl">Login</h2>

                <div className="space-y-4">
                    {LOGIN_INPUT_LIST?.length > 0 &&
                        LOGIN_INPUT_LIST.map((input) => (
                            <div className="space-y-3 text-sm" key={input.name}>
                                <label className="capitalize">
                                    {input.label}
                                </label>
                                <input
                                    autoComplete="off"
                                    {...register(input.name, input.rules || {})}
                                    type={input.type || "text"}
                                    className="custom_input"
                                />
                                {errors[input.name] && (
                                    <FormFieldError
                                        message={errors[input.name].message}
                                    />
                                )}
                            </div>
                        ))}
                </div>

                <button type="submit" className="primary_btn w-full">
                    Submit
                </button>

                {/* <p className="text-center">
                    Don't have an account ?
                    <Link to="/signup" className="ml-2 text-black">
                        Sign up
                    </Link>
                    </p> */}
            </form>
        </section>
    );
}
