<template>
  <header>
    <img
      src="@/assets/Logo_LynxX.png"
      @click="$router.push({ name: 'home' }).catch(() => {})"
    />
    <nav>
      <router-link to="/">HOME</router-link>
      <router-link class="" to="/favourite">FAVOURITE</router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: #fff;
  color: #5b5b5b;
  z-index: 100;
}

img {
  position: relative;
  height: 60px;
  padding: 0 7px;
  transition: transform 0.5s ease;
  z-index: 101;
  cursor: pointer;
}

nav {
  display: flex;
  justify-content: center;
  transform: translate(0, -49px);
}

a {
  padding: 0 15px;
  font-size: 22px;
  font-weight: 300;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #ff9900;
}

a.router-link-exact-active {
  color: #ff9900;
}

nav > a:not(:first-child):before {
  content: "|";
  position: relative;
  left: -15px;
  color: #9e9e9e;
  font-size: 15px;
  font-weight: 400;
}

@media only screen and (max-width: 992px) {
  nav {
    justify-content: flex-end;
  }
}

@media only screen and (max-width: 600px) {
  img {
    transform: translate(-184px, 0);
  }
}

@media only screen and (max-width: 300px) {
  a {
    font-size: 16px;
    padding: 0 5px;
  }

  img {
    height: 36px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    transform: none;
  }

  nav {
    justify-content: center;
    transform: translate(0, -3px);
  }

  nav > a:not(:first-child):before {
    left: -5px;
  }
}
</style>
