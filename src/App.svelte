<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import Board from "./lib/Board.svelte";
  import modal from "./utils/modal";
  import Store from "./utils/store";

  Store.subscribe((store) => {
    Store.setStorage(store);
  });

  let Modal: typeof SvelteComponent;
  modal.subscribe((m) => {
    Modal = m;
  });
</script>

<main>
  <Board />
</main>

{#if Modal}
  <svelte:component this={Modal} />
{/if}

<style>
  main {
    padding: 40px;
  }
</style>
