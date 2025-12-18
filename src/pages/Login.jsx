import React from "react";

export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="flex flex-col items-center px-[27px]">
      <h1 className="text-3xl font-semibold text-[#161616] mt-16 mb-8">
        Sign in to your account
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-[500px]"
      >
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
          className="border border-gray-300 h-[40px] indent-[10px] shadow-sm font-normal rounded-t-[6px] focus:outline-none"
        />

        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
          className="border border-gray-300 border-t-0 h-[40px] indent-[10px] shadow-sm font-normal rounded-b-[6px] focus:outline-none"
        />

        <button
          type="submit"
          className="bg-[#FF8C38] border-none rounded-[6px] h-[55px] mt-[22px] text-white font-medium"
        >
          Log in
        </button>
      </form>
    </div>
  );
}
