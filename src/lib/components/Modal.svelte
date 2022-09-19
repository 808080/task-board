<script lang="ts">
  import { onDestroy } from "svelte";
  import { fade } from "svelte/transition";
  import ColumnContext from "../../utils/column";
  import modal from "../../utils/modal";
  import Button from "./Button.svelte";

  export let cancelText: string = "Отмена";
  export let submitText: string = "Добавить";
  export let cancelClassList: string = "";
  export let submitClassList: string = "success";
  export let title: string = "";
  export let classList: string = "";

  const close = () => modal.set(null);

  export let onCancel = close;
  export let onSubmit: (e: Event) => void = () => {};

  const duration = 100;

  onDestroy(() => {
    ColumnContext.set(null);
  });
</script>

<div transition:fade={{ duration }} class="modal-background" on:click={close} />

<form
  on:submit={onSubmit}
  transition:fade={{ duration }}
  class="modal {classList}"
>
  {#if title}
    <h3 class="modal__title">{title}</h3>
  {/if}
  <slot />

  <div class="modal__actions">
    <Button
      type="button"
      text={cancelText}
      on:click={onCancel}
      classList="btn {cancelClassList}"
    />
    <Button type="submit" text={submitText} classList="btn {submitClassList}" />
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
    z-index: 10;
  }

  .modal {
    position: fixed;
    z-index: 10;
    left: 50%;
    top: 50%;
    width: calc(100vw - 4rem);
    max-width: 22rem;
    max-height: calc(100vh - 4rem);
    overflow: auto;
    transform: translate(-50%, -50%);
    padding: 1em;
    border-radius: 0.4rem;
    background: white;
  }

  .modal__title {
    text-align: center;
    margin-bottom: 20px;
  }

  .modal__actions {
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
  }
</style>
