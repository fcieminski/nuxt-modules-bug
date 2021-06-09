<template>
  <div>Error page</div>
</template>

<script>
export default {
  name: "Error",
  layout: "error",
  props: {
    error: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
