<template>
  <footer>
    <div class="socials">
      <a href="https://www.facebook.com/profile.php?id=100007068168349"
        ><ion-icon name="logo-facebook"></ion-icon>
      </a>
      <a href="https://www.instagram.com/artis.daugats.art/"
        ><ion-icon name="logo-tiktok"></ion-icon>
      </a>
      <a href="https://www.instagram.com/artis.daugats.art/"
        ><ion-icon name="logo-instagram"></ion-icon>
      </a>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  background-color: var(--primary);
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
</style>
