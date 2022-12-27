<template>
  <div class="col-10 col-sm-7 col-lg-7" align="center">
    <!-- <img
      :alt="alt"
      class="d-block mx-lg-auto img-fluid"
      loading="lazy"
      :src="require(`@/assets/images/${src}`)"
    /> -->
    <div class="contact-info">
      <div class="box">
        <div class="icon">
          <div class="text">
            <h3>Location</h3>
            <p>Haifa, Israel</p>
          </div>
        </div>
        <div class="box">
          <div class="icon">
            <i class="fas fa-phone-alt"></i>
          </div>
          <div class="text">
            <h3>Phone Number</h3>
            <p>050-900-6794</p>
          </div>
        </div>
        <div class="box">
          <div class="text">
            <h3>Email</h3>
            <p>roialfassi@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["src", "alt"],
};
</script>
<style></style>
