<script lang="ts">
  export let type: 'button' | 'submit' | 'reset';
  export let text: string;
  export let classList: string = '';
</script>

<button on:click {type} class={classList}>
  {text}
</button>

<style>

</style>
