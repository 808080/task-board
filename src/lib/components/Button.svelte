<script lang="ts">
  export let type: "button" | "submit" | "reset";
  export let text: string = "";
  export let classList: string = "";
</script>

<button on:click {type} class={classList}>
  {text}
  <slot />
</button>

<style>
  .icon-btn {
    background-color: transparent;
    padding: 0;
    transition: 0.2s;
  }

  .icon-btn:hover {
    opacity: 0.7;
  }

  .add-btn {
    margin-top: 16px;
    background-color: #d0d0d0;
    color: #fbfaf9;
    opacity: 0.3;
    transition: 0.2s;
    width: 32px;
    height: 32px;
    font-size: 20px;
    font-weight: var(--text-bold);
  }

  .add-btn:hover {
    background-color: var(--light-blue);
  }
</style>
