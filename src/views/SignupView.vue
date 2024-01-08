<template>
  <div class="login-container">
    <h1>Reģistrēšanās</h1>
    <form class="login-form">
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Ē-pasta adrese"
      />
      <input type="text" id="name" name="name" placeholder="Vārds" />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Izveido paroli"
      />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Apstiprini paroli"
      />
      <div class="checkbox-container">
        <input
          type="checkbox"
          name="newsletter-checkbox"
          id="newsletter-checkbox"
          value="newsletter-checkbox"
        />
        <label for="newsletter-checkbox">Vēlos saņemt jaunumus ē-pastā</label>
      </div>
      <button type="submit" class="login">Reģistrējies</button>
      <p>
        Tev jau ir konts? <router-link to="/login">Pieslēgties</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  setup() {
    // Your Vue 3 Composition API logic goes here (if needed)
    return {};
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  background-color: #f4f4f4;
  height: 80vh;

  h1 {
    margin-bottom: 1rem;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 30rem;
    margin: 1rem 0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      padding: 0.8rem;
      width: 100%;
      border: 1px solid #ddd;
      border-radius: 4px;
      &:focus {
        outline: none;
        border-color: var(--primary);
      }
    }

    .checkbox-container {
      width: 100%;
      display: flex;
      justify-content: flex-start;

      input {
        width: fit-content;
      }
    }

    a {
      text-decoration: underline;
    }

    .login {
      padding: 0.8rem;
      border: none;
      border-radius: 4px;
      background-color: var(--secondary);
      color: var(--neutral-two);
      cursor: pointer;
      width: 100%;
      &:hover {
        background-color: var(--primary);
        color: var(--neutral-one);
      }
    }
    .register {
      padding: 0.8rem;
      border: 2px solid var(--secondary);
      border-radius: 4px;
      background-color: none;
      color: var(--neutral-two);
      cursor: pointer;
      width: 100%;
      &:hover {
        background-color: var(--primary);
        color: var(--neutral-one);
      }
    }
  }
}

// Responsive styling
@media (max-width: 600px) {
  .login-container {
    .login-form {
      padding: 1rem;
    }
  }
}
</style>
