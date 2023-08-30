import React, { useEffect, useState } from "react";
import { Button, Checkbox, TextInput } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faXmark } from "@fortawesome/free-solid-svg-icons";

const Form = ({ showForm, setShowForm }) => {
  useEffect(() => {
    if (!showForm) {
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.add("overflow-hidden");
    }
  }, [showForm]);

  // State to manage the message content in the textarea
  const [textareaMessage, setTextareaMessage] = useState(
    "Piszę w sprawie ogłoszenia na Gratka.pl. Czy oferta jest nadal aktualna?"
  );

  // State to manage the warning flags for form fields
  const [warnings, setWarnings] = useState({
    textarea: false,
    email: false,
    telephone: false,
  });

  // Handler to update the textarea message when edited
  const textareaEditHandler = (e) => {
    setTextareaMessage(e.target.value);
  };

  // Handler to set the textarea message from a preset value on button click
  const textareaMessageHandler = (e) => {
    e.preventDefault();
    const dataMessage = e.currentTarget.getAttribute("data-message");
    setTextareaMessage(dataMessage);
  };

  // Handler to check form field validations on blur
  const blurHandler = (e) => {
    const target = e.currentTarget;

    if (target.name === "messageText") {
      if (target.value.length < 10) {
        setWarnings((prevState) => ({ ...prevState, textarea: true }));
      } else {
        setWarnings((prevState) => ({ ...prevState, textarea: false }));
      }
    } else if (target.name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(target.value)) {
        setWarnings((prevState) => ({ ...prevState, email: true }));
      } else {
        setWarnings((prevState) => ({ ...prevState, email: false }));
      }
    } else if (target.name === "telephone") {
      const telephonePattern = /^[0-9]{10}$/;
      if (!telephonePattern.test(target.value)) {
        setWarnings((prevState) => ({ ...prevState, telephone: true }));
      } else {
        setWarnings((prevState) => ({ ...prevState, telephone: false }));
      }
    }
  };

  return (
    <>
      <div
        className={`static p-5 bg-white rounded-lg lg:fixed lg:top-0 lg:left-0 lg:w-full lg:min-h-screen lg:bg-zinc-100 lg:z-30 ${
          !showForm && "lg:hidden"
        }`}
        id="questionForm">
        {/* The div having close-form button */}
        <div className="hidden lg:flex lg:justify-end lg:px-6">
          <button
            onClick={() => {
              setShowForm(false);
            }}>
            <FontAwesomeIcon icon={faXmark} className="text-3xl" />
          </button>
        </div>
        <h1 className={`text-xl font-bold sm:text-center`}>
          Wybierz pytanie lub wpisz własną wiadomość
        </h1>
        <div className="mt-4">
          <form className="grid grid-cols-2 gap-4 lg:grid-cols-1">
            <div className="flex flex-wrap gap-2 col-span-2 lg:row-start-2 lg:col-span-1 lg:bg-white lg:p-4">
              <Button
                onClick={textareaMessageHandler}
                textSize="xs"
                text="Czy aktualne?"
                type="extraLightBlueFilled"
                dataMessage="Piszę w sprawie ogłoszenia na Gratka.pl. Czy oferta jest nadal aktualna?"
              />
              <Button
                onClick={textareaMessageHandler}
                textSize="xs"
                text="Proszę o więcej zdjęć"
                type="extraLightBlueFilled"
                dataMessage="Piszę w sprawie ogłoszenia na Gratka.pl. Czy mogę otrzymać więcej zdjęć?"
              />
              <Button
                onClick={textareaMessageHandler}
                textSize="xs"
                text="Proszę o film"
                type="extraLightBlueFilled"
                dataMessage="Piszę w sprawie ogłoszenia na Gratka.pl. Czy mogę zobaczyć szczegóły na wideo?"
              />
              <Button
                onClick={textareaMessageHandler}
                textSize="xs"
                text="Proszę o wideoczat"
                type="extraLightBlueFilled"
                dataMessage="Piszę w sprawie ogłoszenia na Gratka.pl. Czy mogę zobaczyć szczegóły podczas wideorozmowy np. Messenger, WhatsApp, Skype?"
              />
            </div>
            <div className="row-span-2 flex flex-col gap-y-2 lg:row-start-3 lg:row-span-1">
              <div
                className={`relative flex flex-col gap-y-2 flex-1 border-1 ${
                  warnings.textarea
                    ? "border-red-400 bg-red-50"
                    : "border-zinc-400 lg:bg-white"
                } rounded p-2`}>
                <label className="text-xs text-zinc-600" htmlFor="messageText">
                  Twoja wiadomość
                </label>
                <textarea
                  name="messageText"
                  placeholder="Twoja wiadomość"
                  min="10"
                  max="1000"
                  maxLength="1000"
                  id="messageText"
                  value={textareaMessage}
                  onBlur={blurHandler}
                  onChange={textareaEditHandler}
                  className="h-full text-sm resize-none outline-none bg-transparent"
                  data-required></textarea>
                <span className="absolute top-2 right-2 text-xs text-zinc-600">
                  {textareaMessage.length < 10
                    ? "Wpisz co najmniej 10 znaków"
                    : `Zostało ${1000 - textareaMessage.length} znaków`}
                </span>
              </div>
            </div>
            <div className="space-y-2 lg:row-start-1">
              <div className="flex gap-x-2 lg:flex-col lg:gap-y-2">
                <TextInput
                  isWarning={warnings.email}
                  placeholder="E-mail"
                  name="email"
                  onBlur={blurHandler}
                />
                <TextInput
                  isWarning={warnings.telephone}
                  placeholder="Telefon"
                  name="telephone"
                  onBlur={blurHandler}
                />
              </div>
            </div>
            <div className="space-y-2 col-start-2 lg:col-start-1 lg:row-start-4">
              <Checkbox
                nameIdHtmlFor="loanCheckbox"
                label="chcę skorzystać z kredytu, w tym Kredytu Hipotecznego 2%"
                tooltipMessage="Wyrażam zgodę na udostępnienie moich danych osobowych Lendi Sp. z o.o. w celu umówienia spotkania z ekspertem kredytowym."
              />
              <Checkbox
                nameIdHtmlFor="promotionCheckbox"
                label="chcę otrzymywać informacje o promocjach i usługach"
                tooltipMessage="Wyrażam zgodę na przesyłanie mi przez spółki z Grupy MZN Property informacji handlowych lub marketingowych, dotyczących oferty tych Spółek lub ich partnerów, e-mailem lub SMS-em."
              />
            </div>
            <div className="col-start-2 mt-4 lg:row-start-5 lg:col-start-1">
              <Button text="Wyślij" className="w-full uppercase" />
            </div>
          </form>
          <div className="mt-4 text-center underline text-xs text-zinc-600">
            <a href="https://gratka.pl/polityka-prywatnosci/nota-informacyjna">
              O OCHRONIE DANYCH OSOBOWYCH
            </a>
          </div>
          {!(warnings.textarea || warnings.email || warnings.telephone) || (
            <div className="flex gap-2 text-red-500 border-b-2 border-red-500 pb-2">
              <div>
                <FontAwesomeIcon icon={faInfoCircle} />
              </div>
              <div className="font-bold text-sm">
                {warnings.email && <p>Pole "E-mail" jest wymagane</p>}
                {warnings.telephone && <p>Pole "Telefon" jest wymagane</p>}
                {warnings.textarea && (
                  <p>Pole "Twoja wiadomość" jest wymagane</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
