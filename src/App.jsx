/* eslint-disable no-useless-escape */
import { useState } from "react";
import "./App.css";

const inputStyles =
  "border-gray-200 border-[1px] rounded-md p-[1rem] pl-[2rem] placeholder:text-gray-500 placeholder:font-medium focus:border-slate-500 focus:outline-none font-semibold text-gray-600 w-full min-w-[150px]";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateInputs = (e) => {
    e.preventDefault();
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let isValid = true;
    // Validar el input del apellido
    if (lastName.trim() === "") {
      setLastNameError("Last Name cannot be empty");
      isValid = false;
    } else {
      setLastNameError("");
    }

    // Validar el input del nombre
    if (firstName.trim() === "") {
      setFirstNameError("First Name cannot be empty");
      isValid = false;
    } else {
      setFirstNameError("");
    }

    // Validar el input del correo electrónico
    if (email.trim() === "") {
      setEmailError("Email cannot be empty");
      isValid = false;
    } else if (!email.match(mailformat)) {
      setEmailError("Looks like this is not an email");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validar el input de la contraseña
    if (password.trim() === "") {
      setPasswordError("Password cannot be empty");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Please enter a password with at least 8 characters.");
      isValid = false;
    } else {
      setPasswordError("");
    }
    if (isValid) {
      // Anulamos el preventDefault solo si todos los campos son válidos
      e.target.closest("form").submit();
    }
  };

  return (
    <section className="sm:p-16 px-6 py-12 flex flex-col justify-center min-h-screen">
      <div className="2xl:max-w-[1280px] w-full flex justify-center items-center lg:flex-row flex-col mx-auto">
        <div className="flex-1">
          <h1 className="md:text-[3rem] text-[1.75rem] lg:text-left text-center leading-[1] text-white font-bold">
            Learn to code by watching others
          </h1>
          <p className="md:text-[1rem] text-[17px] text-white max-w-[500px] mt-[2rem] lg:text-left text-center lg:mx-0 mx-auto lg:mb-0 mb-[4rem]">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-[1.5rem] lg:pl-[2rem]">
          <button
            type="button"
            className="md:p-4 p-5 w-full rounded-lg bg-[var(--blue)] font-semibold text-white h-auto"
          >
            Try it free 7 days{" "}
            <span className="font-normal">
              then
              <br className="lg:hidden" /> $20/mo. thereafter
            </span>
          </button>
          <div
            id="form-container"
            className="md:p-[3rem] p-[1.5rem] bg-white rounded-xl w-full"
          >
            <form className="flex flex-col gap-[1rem]">
              <input
                className={`${inputStyles}`}
                style={firstNameError ? { border: "2px solid var(--red)" } : {}}
                type="text"
                placeholder="First Name"
                onChange={(e) => {
                  setFirstName(e.target.value);
                  setFirstNameError("");
                }}
              />
              {firstNameError && (
                <p className="italic text-right text-[11px] text-[var(--red)] font-medium mt-[-10px]">
                  {firstNameError}
                </p>
              )}
              <input
                className={`${inputStyles}`}
                style={lastNameError ? { border: "2px solid var(--red)" } : {}}
                type="text"
                placeholder="Last Name"
                onChange={(e) => {
                  setLastName(e.target.value);
                  setLastNameError("");
                }}
              />
              {lastNameError && (
                <p className="italic text-right text-[11px] text-[var(--red)] font-medium mt-[-10px]">
                  {lastNameError}
                </p>
              )}
              <input
                className={`${inputStyles}`}
                style={emailError ? { border: "2px solid var(--red)", color: "var(--red)"  } : {}}
                type="email"
                placeholder="Email Address"
                autoComplete="username"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
              />
              {emailError && (
                <p className="italic text-right text-[11px] text-[var(--red)] font-medium mt-[-10px]">
                  {emailError}
                </p>
              )}
              <input
                className={`${inputStyles}`}
                style={passwordError ? { border: "2px solid var(--red)"} : {}}
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError("");
                }}
              />
              {passwordError && (
                <p className="italic text-right text-[11px] text-[var(--red)] font-medium mt-[-10px]">
                  {passwordError}
                </p>
              )}
              <button
                type="submit"
                className="p-4 w-full rounded-lg bg-[var(--green)] uppercase text-white font-medium tracking-wide h-auto"
                onClick={(e) => validateInputs(e)}
              >
                {" "}
                Claim your free trial
              </button>
              <p className="text-[11px] font-medium text-[var(--grayish-blue)] text-center">
                By clicking the button, you are agreeing to our{" "}
                <span className="text-[var(--red)] font-bold cursor-pointer">
                  Terms and Services
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/NVergil" target="_blank" rel="noreferrer">
            VerDanT
          </a>
          .
        </p>
      </footer>
    </section>
  );
}

export default App;
