<template>
  <kinesis-container class="contains3">
    <kinesis-element type="depth" :strength="5" class="grand-child girl">
      <form class="contact-form" @submit.prevent="sendEmail">
        <div class="col">
          <!-- <div class="row mb-5"><h2>Send me a message</h2></div> -->
          <div class="row mb-3">
            <input
              name="from_name"
              type="text"
              class="form-control naam shadow"
              placeholder="Name"
              v-model="name"
              @blur="$v.name.$touch()"
            />
          </div>
          <div v-if="!$v.name.required" class="row">
            <p class="text-secondary">Name is required</p>
          </div>
          <div class="row mb-3">
            <input
              name="from_email"
              type="email"
              class="form-control shadow"
              placeholder="name@example.com"
              v-model.trim="email"
              @blur="$v.email.$touch()"
            />
            <div v-if="!$v.email.required" class="row p-3">
              <p class="text-secondary">Email is required</p>
            </div>
            <div v-if="!$v.email.email" class="row p-3">
              <p class="text-danger">Please enter a valid email address</p>
            </div>
          </div>
          <div class="row form-group">
            <label for="message-area" class="mb-2">Message</label>
            <textarea
              name="message"
              class="form-control shadow"
              id="message-area"
              rows="4"
              placeholder="write your message here"
              v-model="message"
              @blur="$v.message.$touch()"
            ></textarea>
            <div v-if="!$v.message.required" class="row p-3">
              <p class="text-secondary">Message is required</p>
            </div>
          </div>
          <div class="row">
            <button
              type="submit"
              class="btn btn-outline-dark btn-lg btn-block shadow"
              :disabled="$v.$invalid"
            >
              Submit
            </button>
          </div>
          <router-link class="router row back" :to="{ name: 'portfolio' }"
            ><h1 class="pen">Go Back</h1></router-link
          >
        </div>
      </form>
    </kinesis-element>
  </kinesis-container>
</template>

<script>
import emailjs from 'emailjs-com'
import { required, email } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      email: null,
      name: null,
      message: null
    }
  },
  validations: {
    email: {
      required,
      email
    },
    name: {
      required
    },
    message: {
      required
    }
  },
  methods: {
    sendEmail: e => {
      emailjs
        .sendForm(
          'gmail',
          'contact_from',
          e.target,
          'user_LPKKcf2WERM7ddylhNSkh'
        )
        .then(
          result => {
            console.log('SUCCESS!', result.status, result.text)
          },
          error => {
            console.log('FAILED...', error)
          }
        )
    }
  }
}
</script>

<style scoped>
.contains3 {
  /* background-color: #9c89b8; */
  /* background: rgb(156, 137, 184);
  background: linear-gradient(
    360deg,
    rgba(156, 137, 184, 1) 0%,
    rgba(239, 195, 230, 1) 100%
  ); */
  padding-top: 10%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

img {
  width: 10vh;
}

.grand-child {
  /* background-color: #e4d1ce94; */
  border-radius: 5%;
  padding: 10%;
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* background-color: red; */
}

.girl {
  width: 70%;
  margin-left: 2%;
}

.back {
  margin-top: 5%;
  text-decoration: none;
  /* position: fixed; */
  /* bottom: 0%;
  right: 10%; */
  color: black;
  justify-content: center;
}

.pen {
  font-size: 2em;
}

/* h2 {
  margin: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-family: 'Lobster', cursive;
  padding: 10px;
  border: solid 10px #000000;
  text-align: center;
} */

textarea {
  max-height: 30vh;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  .contains3 {
    padding-top: 30px;
    height: 130vh;
    /* max-height: 140vh; */
  }

  .grand-child {
    height: 120vh;
  }

  h2 {
    font-size: 1.2rem;
  }
}

/* .back {
  margin-left: 40%;
} */

@media only screen and (min-device-width: 1000px) and (max-device-height: 1000px) and (-webkit-min-device-pixel-ratio: 2) {
  .contains3 {
    height: 130vh;
  }

  .grand-child {
    height: 100vh;
  }

  .back {
    margin-top: 10%;
  }
}

@media only screen and (min-device-width: 600px) and (max-device-width: 850px) and (max-device-height: 1100px) and (-webkit-min-device-pixel-ratio: 2) {
  .grand-child {
    height: 65vh;
  }
}
</style>
