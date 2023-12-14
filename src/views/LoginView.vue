<template>
  <div class="login-container">
    <h1>Pieslēgties</h1>
    <form class="login-form">
      <input type="text" id="username" placeholder="Lietotājvārds" />
      <input type="password" id="password" placeholder="Parole" />
      <button type="submit" class="login">Pieslēgties</button>
      <p>Nav konta? <a href="">Izveido to</a></p>
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
