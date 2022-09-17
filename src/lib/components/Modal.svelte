<script lang="ts">
  import { fade } from "svelte/transition";
  import modal from "../../utils/modal";
  import Button from "./Button.svelte";

  export let cancelText: string = "Отмена";
  export let submitText: string = "Добавить";
  export let title: string = "";
  export let classList: string = "";

  const close = () => modal.set(null);

  export let onCancel = close;
  export let onSubmit: (e: Event) => void = () => {};

  const duration = 100;
</script>

<div transition:fade={{ duration }} class="modal-background" on:click={close} />

<form
  on:submit={onSubmit}
  transition:fade={{ duration }}
  class="modal {classList}"
>
  {#if title}
    <h3>{title}</h3>
  {/if}
  <slot />

  <div class="actions">
    <Button type="button" text={cancelText} on:click={onCancel} />
    <Button type="submit" text={submitText} />
  </div>
</form>

<style>
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  .modal {
    position: fixed;
    left: 50%;
    top: 50%;
    width: calc(100vw - 4rem);
    max-width: 32rem;
    max-height: calc(100vh - 4rem);
    overflow: auto;
    transform: translate(-50%, -50%);
    padding: 1em;
    border-radius: 0.4rem;
    background: white;
  }
</style>
