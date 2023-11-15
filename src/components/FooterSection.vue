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
  background-color: var(--primary);
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

  input[type="text"], input[type="email"], textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 0.3rem;
    margin-bottom: 10px;
  }

  button {
    background-color: transparent;
    color: var(--secondary);
    border: 2px solid var(--secondary);
    padding: 10px 20px;
    border-radius: 0.3rem;
    cursor: pointer;
    width: 100%;
    font-weight: 600;
  }

  button:hover {
    background-color: var(--secondary)
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
      background-color: var(--secondary);
      border-radius: 50%;;

      ion-icon {
            font-size: 1.6rem;
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
