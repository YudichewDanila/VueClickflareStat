<template>
  
<div class="fixed w-full h-full flex justify-center items-center bg-slate-100">
  <div
    class="w-11/12 sm:w-auto flex justify-center items-center h-full px-2 sm:px-4 lg:px-6"
  >
    <div
      class="w-full bg-white shadow-md rounded flex flex-col items-stretch justify-center p-2 sm:p-4 lg:p-6"
    >
      <h1 class="font-bold text-center mb-4 text-2xl text-black-400">
        <span class="text-sky-500">Clickflare</span><span>Stat</span>
      </h1>
      <form
        @submit.prevent="login"
        class="form flex flex-col"
        method="POST"
        id="login-form"
      >
        <div class="group mb-3 transition ease-in-out inline-block rounded">
          <input
            v-model="credentials.username"
            class="w-full sm:w-96 text-sm sm:text-base min-h-10 outline-none focus:ring ring-sky-500/50 transition ease-in-out duration-200 px-2 sm:px-4 lg:px-6 text-gray-500 shadow-inner rounded border focus:shadow-transparent hover:border-sky-500 focus:border-sky-500"
            placeholder="Username..."
            type="text"
            name="username"
            id="username"
          />
        </div>
        <div class="group mb-3 transition ease-in-out inline-block rounded">
          <input
            v-model="credentials.password"
            class="w-full sm:w-96 text-sm sm:text-base min-h-10 outline-none focus:ring ring-sky-500/50 transition ease-in-out duration-200 px-2 sm:px-4 lg:px-6 text-gray-500 shadow-inner rounded border focus:shadow-transparent hover:border-sky-500 focus:border-sky-500"
            placeholder="Password..."
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div class="flex justify-between items-center text-sm">
          <div class="inline-flex items-center">
            <label
              class="relative flex cursor-pointer items-center rounded-full p-3"
              for="remember"
              data-ripple-dark="true"
            >
              <input
                v-model="credentials.remember"
                id="remember"
                name="remember"
                type="checkbox"
                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-sky-500 checked:bg-sky-500 checked:before:bg-sky-500 hover:before:opacity-10"
              />
              <div
                class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </label>
            <label
              class="mt-px cursor-pointer select-none font-light text-gray-700"
              for="remember"
            >
              Remember Me
            </label>
          </div>
          <button
            class="transition rounded bg-sky-500 text-white px-4 py-2 hover:bg-sky-500/80"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
import notify from "./helpers/Notify.vue";

export default {
  name: "Login",
  data() {
    return {
      login_url: "/signin",
      credentials: {
        username: null,
        password: null,
        remember: false,
      },
    };
  },
  methods: {
    login() {
      if (
        this.credentials.username === null ||
        this.credentials.username.length === 0
      )
        return notify.emptyError("username");
      if (
        this.credentials.password === null ||
        this.credentials.password.length === 0
      )
        return notify.emptyError("password");
      if (typeof this.credentials.username !== "string")
        return notify.invalidTypeError("username", "string");
      if (typeof this.credentials.password !== "string")
        return notify.invalidTypeError("password", "string");

      console.log(this.credentials);
      axios
        .post(this.login_url, this.credentials)
        .then((response) =>
          response.status === 200
            ? (window.location.href = "/")
            : notify.apiMessage(response)
        )
        .catch((error) => notify.apiError(error));
    },
  },
};
</script>

<style scoped>
.wra{
  font-family: 'Inter var', sans-serif;
  font-feature-settings: "cv02", "cv03", "cv04", "cv11";
}
</style>
