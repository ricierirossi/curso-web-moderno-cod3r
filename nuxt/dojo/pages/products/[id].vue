<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vitae
      recusandae nihil eaque sunt distinctio esse hic fugit vel dolore?
    </p>
  </div>
</template>

<script setup>
// o valor dentro de { } deve ser o mesmo do arquivo.s
const { id } = useRoute().params;

definePageMeta({
  layout: "products",
});
</script>

<style scoped></style>
