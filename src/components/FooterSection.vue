<template>
  <footer>
    <div class="container">

      <!-- Form Section -->
      <div class="form">
        <form @submit.prevent="submitForm">
          <div>
            <input type="text" v-model="form.name" placeholder="Vārds" required>
          </div>
          <div>
            <input type="email" v-model="form.email" placeholder="Epasts" required>
          </div>
          <div>
            <textarea v-model="form.message" placeholder="Jūsu ziņa" required></textarea>
          </div>
          <button type="submit">Nosūtīt</button>
        </form>
      </div>

      <!-- Contact Information Section -->
      <div class="contacts">
        <p>Email: example@example.com</p>
        <p>Phone: 123-456-7890</p>
        <p>Address: 123 Vue Street, JavaScript City</p>
      </div>

      <!-- Social Media Links Section -->
      <div class="socials">
        <a href="https://instagram.com" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
        <a href="https://tiktok.com" target="_blank"><ion-icon name="logo-tiktok"></ion-icon></a>
        <a href="https://facebook.com" target="_blank"><ion-icon name="logo-facebook"></ion-icon></a>
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
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log('Form submitted:', this.form);
      // Reset form after submission
      this.form = { name: '', email: '', message: '' };
    }
  }
};
</script>

<style lang="scss">
footer {
  background-color: var(--secondary);
  padding: 20px;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .container {
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .form, .contacts, .socials {
    flex: 1 1 300px;
    margin: 10px;
    padding: 20px;
  }

  .form {
    border-radius: 5px;
  }

  .form form div {
    margin-bottom: 15px;
  }

  input, textarea {
    width: 100%;
    padding: 10px;
    border: none;
    border-bottom: 2px solid var(--primary);
    border-radius: 0.2rem;
    margin-bottom: 10px;
    background-color: var(--neutral-one);
    color: var(--neutral-two);
  }

  input:focus, textarea:focus {
    outline: none;
  }

  textarea {
   resize: none;
  }

  ::placeholder {
  color:  var(--neutral-two);
  opacity: 0.7; /* Firefox */
  font-weight: 500;
  }

  button {
    background-color: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);
    padding: 0.5rem 2rem;
    border-radius: 0.2rem;
    cursor: pointer;
    width:  50%;
    font-weight: 600;
  }

  button:hover {
    background-color: var(--primary);
    color: var(--neutral-two);
  }

  .socials {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  

    a {
      width: 3rem;
      height: 3rem;
      background-color: var(--primary);
      border-radius: 50%;

      ion-icon {
            font-size: 2rem;
            color: var(--neutral-two);
          }
    }
  }

  .socials a:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      align-items: center;
    }

    .form, .contacts, .socials {
      flex-basis: 100%;
    }
  }
}

</style>
