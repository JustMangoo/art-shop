<template>
  <footer>
    <div class="container">
      <!-- Form Section -->
      <div class="form">
        <h3>Sazinies</h3>
        <form @submit.prevent="submitForm">
          <div>
            <input
              type="text"
              name="name"
              v-model="form.name"
              placeholder="Vārds"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              v-model="form.email"
              placeholder="Epasts"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              v-model="form.message"
              placeholder="Jūsu ziņa"
              required
            ></textarea>
          </div>
          <button type="submit">Nosūtīt</button>
        </form>
      </div>

      <!-- Contact Information Section -->
      <div class="contacts">
        <h3>Kontakti</h3>
        <div class="info">
          <p>
            <ion-icon name="mail-outline"></ion-icon>
            Example@example.com
          </p>
          <p>
            <ion-icon name="call-outline"></ion-icon>
            123-456-7890
          </p>
          <p>
            <ion-icon name="location-outline"></ion-icon>
            123 Vue Street, JavaScript City
          </p>
        </div>
      </div>

      <!-- Social Media Links Section -->
      <div class="socials">
        <h3>Sociālie tīkli</h3>
        <div class="links">
          <a class="icon" href="https://instagram.com" target="_blank"
            ><ion-icon name="logo-instagram"></ion-icon
          ></a>
          <a class="icon" href="https://tiktok.com" target="_blank"
            ><ion-icon name="logo-tiktok"></ion-icon
          ></a>
          <a class="icon" href="https://facebook.com" target="_blank"
            ><ion-icon name="logo-facebook"></ion-icon
          ></a>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <p class="copyright">© 2023 Aleksis Daugats</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log("Form submitted:", this.form);
      // Reset form after submission
      this.form = { name: "", email: "", message: "" };
    },
  },
};
</script>

<style lang="scss">
.form {
  grid-area: form;
}
.contacts {
  grid-area: contacts;
}
.socials {
  grid-area: socials;
}

footer {
  background-color: var(--secondary);
  padding: 20px;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .container {
    width: 70%;
    margin: auto;
    display: grid;
    grid-template-areas:
      "form contacts"
      "socials socials";
  }

  .form,
  .contacts,
  .socials {
    flex: 1 1 300px;
    margin: 10px;
    padding: 20px;
  }

  .form,
  .contacts {
    h3 {
      padding: 0 0 0.2rem 0.5rem;
      width: 100%;
    }
  }

  .socials {
    h3 {
      text-align: center;
      width: 100%;
    }
  }
  .form {
    border-radius: 5px;

    .form form div {
      margin-bottom: 15px;
    }

    input,
    textarea {
      width: 100%;
      padding: 0.6rem;
      border: none;
      border-bottom: 2px solid var(--primary);
      border-radius: 0.2rem;
      margin-bottom: 10px;
      background-color: var(--neutral-one);
      color: var(--neutral-two);
      outline: none;
    }

    input:focus,
    textarea:focus {
      outline: 2px solid var(--primary);
    }

    textarea {
      resize: none;
    }

    ::placeholder {
      color: var(--neutral-two);
      opacity: 0.7;
      font-weight: 500;
    }

    button {
      background-color: transparent;
      color: var(--primary);
      border: 2px solid var(--primary);
      padding: 0.5rem 2rem;
      border-radius: 0.2rem;
      cursor: pointer;
      width: 50%;
      max-width: 15rem;
      font-weight: 600;
    }

    button:hover {
      background-color: var(--primary);
      color: var(--neutral-two);
    }
  }

  .contacts {
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: flex-start;

    .info {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 2rem;

      p {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        user-select: text;

        ion-icon {
          font-size: 1.6rem;
          color: var(--primary);
          margin-right: 0.6rem;
        }
      }
    }
  }

  .socials {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .links {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 2rem;

      a {
        width: 2.6rem;
        height: 2.6rem;
        background-color: var(--primary);
        border-radius: 50%;

        ion-icon {
          font-size: 1.6rem;
          color: var(--neutral-two);
        }
      }

      a:hover {
        transform: scale(1.1);
      }
    }
  }

  .copyright {
    font-size: 0.9rem;
  }

  @media (max-width: 1200px) {
    .container {
      width: 95%;
    }
  }

  @media (max-width: 768px) {
    .container {
      display: grid;
      grid-template-areas:
        "form"
        "contacts"
        "socials";
    }

    .form,
    .contacts,
    .socials {
      flex-basis: 100%;

      h3 {
        text-align: left;
      }
    }
  }
}
</style>
