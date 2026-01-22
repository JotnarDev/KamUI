<template>
  <div
    class="relative grid min-h-screen grid-cols-[1fr_2.5rem_auto_2.5rem_1fr] grid-rows-[1fr_1px_auto_1px_1fr] bg-white [--pattern-fg:var(--color-gray-950)]/5 dark:bg-gray-950 dark:[--pattern-fg:var(--color-white)]/10"
  >
    <div
      class="col-start-3 row-start-3 flex flex-col bg-gray-100 p-2 dark:bg-white/10"
    >
      <form class="max-w-md mx-auto">
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-slate-300/50 appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            placeholder=""
            required
          />
          <label
            for="floating_email"
            class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 start-0 peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >Email address</label
          >
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-slate-300/50 appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            placeholder=" "
            required
          />
          <label
            for="floating_password"
            class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 start-0 peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >Password</label
          >
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="repeat_password"
            id="floating_repeat_password"
            class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-slate-300/50 appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            placeholder=" "
            required
          />
          <label
            for="floating_repeat_password"
            class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 start-0 peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >Confirm password</label
          >
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-slate-300/50 appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
              required
            />
            <label
              for="floating_first_name"
              class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 start-0 peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >First name</label
            >
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-slate-300/50 appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
              required
            />
            <label
              for="floating_last_name"
              class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 start-0 peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >Last name</label
            >
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="floating_phone"
              id="floating_phone"
              class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-slate-300/50 appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
              required
            />
            <label
              for="floating_phone"
              class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 start-0 peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >Phone number</label
            >
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_company"
              id="floating_company"
              class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-slate-300/50 appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
              required
            />
            <label
              for="floating_company"
              class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 start-0 peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >Company</label
            >
          </div>
        </div>
        <button
          type="submit"
          class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-2xl text-sm px-4 py-2.5 focus:outline-none"
        >
          Submit
        </button>
      </form>

      <hr class="my-6 w-full border-(--pattern-fg)" />

      <form class="max-w-sm mx-auto space-y-4">
        <div>
          <label
            for="visitors"
            class="block mb-2.5 text-sm font-medium text-heading"
            >Small Input</label
          >
          <input
            type="text"
            id="visitors"
            class="bg-slate-500 border border-slate-300/50 text-heading text-sm rounded-2xl focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body"
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="visitors"
            class="block mb-2.5 text-sm font-medium text-heading"
            >Base Input</label
          >
          <input
            type="text"
            id="visitors"
            class="bg-slate-500 border border-slate-300/50 text-heading text-sm rounded-2xl focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="visitors"
            class="block mb-2.5 text-sm font-medium text-heading"
            >Large Input</label
          >
          <input
            type="text"
            id="visitors"
            class="bg-slate-500 border border-slate-300/50 text-heading text-base rounded-2xl focus:ring-brand focus:border-brand block w-full px-3.5 py-3 shadow-xs placeholder:text-body"
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="visitors"
            class="block mb-2.5 text-sm font-medium text-heading"
            >Extra Large Input</label
          >
          <input
            type="text"
            id="visitors"
            class="bg-slate-500 border border-slate-300/50 text-heading text-base rounded-2xl focus:ring-brand focus:border-brand block w-full px-4 py-3.5 shadow-xs placeholder:text-body"
            placeholder=""
            required
          />
        </div>
      </form>

      <hr class="my-6 w-full border-(--pattern-fg)" />

      <form class="max-w-sm mx-auto space-y-4">
        <input
          type="text"
          id="disabled-input"
          aria-label="disabled input"
          class="bg-slate-500 border border-slate-300/50 text-fg-disabled text-sm rounded-2xl focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-slate-500/20"
          value="Disabled input"
          disabled
        />
        <input
          type="text"
          id="disabled-input-2"
          aria-label="disabled input 2"
          class="bg-slate-500 border border-slate-300/50 text-heading text-sm rounded-2xl focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-slate-500"
          value="Disabled readonly input"
          disabled
          readonly
        />
      </form>

      <hr class="my-6 w-full border-(--pattern-fg)" />

      <form class="max-w-sm mx-auto">
        <label
          for="input-group-1"
          class="block mb-2.5 text-sm font-medium text-heading"
          >Your Email</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-body"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="input-group-1"
            class="block w-full ps-9 pe-3 py-2.5 bg-slate-500 border border-slate-300/50 text-heading text-sm rounded-2xl focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
            placeholder="name@flowbite.com"
          />
        </div>
      </form>

      <hr class="my-6 w-full border-(--pattern-fg)" />

      <form class="max-w-sm mx-auto">
        <label
          for="website-admin"
          class="block mb-2.5 text-sm font-medium text-heading"
          >Username</label
        >
        <div class="flex shadow-xs rounded-2xl">
          <span
            class="inline-flex items-center px-3 text-sm text-slate-300 bg-slate-500 border rounded-e-0 border-slate-300/50 border-e-0 rounded-s-2xl"
          >
            <svg
              class="w-4 h-4 text-body"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </span>
          <input
            type="text"
            id="website-admin"
            class="rounded-none rounded-e-2xl block w-full px-3 py-2.5 bg-slate-500 border border-slate-300/50 text-heading text-sm focus:ring-brand focus:border-brand placeholder:text-slate-300"
            placeholder="elonmusk"
          />
        </div>
      </form>

      <hr class="my-6 w-full border-(--pattern-fg)" />

      <form class="max-w-sm mx-auto">
        <div class="mb-6">
          <label
            for="success"
            class="block mb-2.5 text-sm font-medium text-fg-success-strong"
            >Your name</label
          >
          <input
            type="text"
            id="success"
            class="bg-green-500/20 border border-green-300 text-fg-green-strong text-sm rounded-2xl focus:ring-green-500 focus:border-green-500 block w-full px-3 py-2.5 shadow-xs placeholder:text-green-500"
            placeholder="green input"
          />
          <p class="mt-2.5 text-sm text-fg-success-strong">
            <span class="font-medium">Well done!</span> Some success message.
          </p>
        </div>
        <div class="mb-6">
          <label
            for="danger"
            class="block mb-2.5 text-sm font-medium text-fg-danger-strong"
            >Your name</label
          >
          <input
            type="text"
            id="danger"
            class="bg-red-500/20 border border-red-300 text-fg-red-strong text-sm rounded-2xl focus:ring-red-500 focus:border-red-500 block w-full px-3 py-2.5 shadow-xs placeholder:text-red-500"
            placeholder="Error input"
          />
          <p class="mt-2.5 text-sm text-fg-danger-strong">
            <span class="font-medium">Oh, snapp!</span> Some error message.
          </p>
        </div>
      </form>

      <hr class="my-6 w-full border-(--pattern-fg)" />

      <form class="max-w-sm mx-auto">
        <label
          for="message"
          class="block mb-2.5 text-sm font-medium text-heading"
          >Your message</label
        >
        <textarea
          id="message"
          rows="4"
          class="bg-slate-500 border border-slate-300/50 text-heading text-sm rounded-2xl focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body"
          placeholder="Write your thoughts here..."
        ></textarea>
      </form>

      <hr class="my-6 w-full border-(--pattern-fg)" />

      <form class="max-w-sm mx-auto">
        <label
          for="countries"
          class="block mb-2.5 text-sm font-medium text-heading"
          >Select an option</label
        >
        <select
          id="countries"
          class="block w-full px-3 py-2.5 bg-slate-500 border border-slate-300/50 text-heading text-sm rounded-2xl focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
        >
          <option selected>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </form>

      <hr class="my-6 w-full border-(--pattern-fg)" />

      <fieldset>
        <legend class="sr-only">Checkbox variants</legend>

        <div class="flex items-center mb-4">
          <input
            checked
            id="checkbox-1"
            type="checkbox"
            value=""
            class="w-4 h-4 border border-slate-300/50 rounded-xs bg-slate-500 focus:ring-2 focus:ring-brand-soft"
          />
          <label
            for="checkbox-1"
            class="ms-2 text-sm font-medium text-heading select-none"
            >I agree to the
            <a href="#" class="text-fg-brand hover:underline"
              >terms and conditions</a
            >.</label
          >
        </div>

        <div class="flex items-center mb-4">
          <input
            id="checkbox-2"
            type="checkbox"
            value=""
            class="w-4 h-4 border border-slate-300/50 rounded-xs bg-slate-500 focus:ring-2 focus:ring-brand-soft"
          />
          <label
            for="checkbox-2"
            class="ms-2 text-sm font-medium text-heading select-none"
            >I want to get promotional offers</label
          >
        </div>

        <div class="flex items-center mb-4">
          <input
            id="checkbox-3"
            type="checkbox"
            value=""
            class="w-4 h-4 border border-slate-300/50 rounded-xs bg-slate-500 focus:ring-2 focus:ring-brand-soft"
          />
          <label
            for="checkbox-3"
            class="ms-2 text-sm font-medium text-heading select-none"
            >I am 18 years or older</label
          >
        </div>

        <div class="flex mb-4">
          <div class="flex items-center h-5">
            <input
              id="helper-checkbox"
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              class="w-4 h-4 border border-slate-300/50 rounded-xs bg-slate-500 focus:ring-2 focus:ring-brand-soft"
            />
          </div>
          <div class="ms-2 text-sm select-none">
            <label
              for="helper-checkbox"
              class="text-sm font-medium text-heading"
              >Free shipping via Flowbite</label
            >
            <p id="helper-checkbox-text" class="text-xs text-body">
              For orders shipped from $25 in books or $29 in other categories
            </p>
          </div>
        </div>

        <div class="flex items-center">
          <input
            id="international-shipping-disabled"
            type="checkbox"
            value=""
            class="w-4 h-4 border border-slate-300/50 rounded-xs bg-slate-500 focus:ring-2 focus:ring-brand-soft"
            disabled
          />
          <label
            for="international-shipping-disabled"
            class="ms-2 text-sm font-medium text-fg-disabled select-none"
            >Eligible for international shipping (disabled)</label
          >
        </div>
      </fieldset>

      <hr class="my-6 w-full border-(--pattern-fg)" />

      <fieldset>
        <legend class="sr-only">Countries</legend>

        <div class="flex items-center mb-4">
          <input
            id="country-option-1"
            type="radio"
            name="countries"
            value="USA"
            class="w-4 h-4 text-neutral-primary border-default-medium bg-slate-500 rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
            checked
          />
          <label
            for="country-option-1"
            class="select-none ms-2 text-sm font-medium text-heading"
          >
            United States
          </label>
        </div>

        <div class="flex items-center mb-4">
          <input
            id="country-option-2"
            type="radio"
            name="countries"
            value="Germany"
            class="w-4 h-4 text-neutral-primary border-default-medium bg-slate-500 rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
          />
          <label
            for="country-option-2"
            class="select-none ms-2 text-sm font-medium text-heading"
          >
            Germany
          </label>
        </div>

        <div class="flex items-center mb-4">
          <input
            id="country-option-3"
            type="radio"
            name="countries"
            value="Spain"
            class="w-4 h-4 text-neutral-primary border-default-medium bg-slate-500 rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
          />
          <label
            for="country-option-3"
            class="select-none ms-2 text-sm font-medium text-heading"
          >
            Spain
          </label>
        </div>

        <div class="flex items-center mb-4">
          <input
            id="country-option-4"
            type="radio"
            name="countries"
            value="United Kingdom"
            class="w-4 h-4 text-neutral-primary border-default-medium bg-slate-500 rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
          />
          <label
            for="country-option-4"
            class="select-none ms-2 text-sm font-medium text-heading"
          >
            United Kingdom
          </label>
        </div>

        <div class="flex items-center">
          <input
            id="option-disabled"
            type="radio"
            name="countries"
            value="China"
            class="w-4 h-4 text-neutral-primary border-default-medium bg-slate-500 rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
            disabled
          />
          <label
            for="option-disabled"
            class="block ms-2 text-sm font-medium text-fg-disabled select-none"
          >
            China (disabled)
          </label>
        </div>
      </fieldset>

      <hr class="my-6 w-full border-(--pattern-fg)" />

      <form class="max-w-lg mx-auto">
        <label
          class="block mb-2.5 text-sm font-medium text-heading"
          for="file_input"
          >Upload file</label
        >
        <input
          class="cursor-pointer bg-slate-500 border border-slate-300/50 text-heading text-sm rounded-2xl focus:ring-brand focus:border-brand block w-full shadow-xs placeholder:text-body"
          id="file_input"
          type="file"
        />
      </form>

      <hr class="my-6 w-full border-(--pattern-fg)" />

      <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer" />
        <div
          class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"
        ></div>
        <span class="ms-3 text-sm font-medium text-heading select-none"
          >Toggle me</span
        >
      </label>

      <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer" checked />
        <div
          class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"
        ></div>
        <span class="ms-3 text-sm font-medium text-heading select-none"
          >Checked toggle</span
        >
      </label>

      <hr class="my-6 w-full border-(--pattern-fg)" />
      <hr class="my-6 w-full border-(--pattern-fg)" />
      <hr class="my-6 w-full border-(--pattern-fg)" />
    </div>
  </div>
</template>
