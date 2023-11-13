<template>
  <footer>
    <div class="container">
      <div class="socials">
        <a href="https://www.facebook.com/profile.php?id=100007068168349">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
        <a href="https://www.instagram.com/artis.daugats.art/">
          <ion-icon name="logo-tiktok"></ion-icon>
        </a>
        <a href="https://www.instagram.com/artis.daugats.art/">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
      </div>
    </div>
    <p class="copyright">© 2023 Aleksis Daugats</p>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  background-color: var(--primary);
  padding: 0 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .container{
    padding: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .socials {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      a {
        width: 2rem;
        height: 2rem;
        background-color: var(--secondary);
        border-radius: 50%;

        ion-icon {
          font-size: 1.3rem;
          color: var(--neutral-two);
        }
      }
    }
  }
  .copyright {
    font-size: 0.8rem;
  }
}
</style>
