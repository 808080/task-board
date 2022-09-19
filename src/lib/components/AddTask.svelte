<script lang="ts">
  import modal from "../../utils/modal";
  import Modal from "./Modal.svelte";
  import ColumnContext from "../../utils/column";
  import Store from "../../utils/store";

  let title = "";

  const onSubmit = (e: MouseEvent) => {
    e.preventDefault();
    title = title.trim();
    if (!title) return;

    Store.addTask(title, $ColumnContext.id);
    modal.set(null);
  };
</script>

<Modal {onSubmit} title="Новая задача">
  <div>
    <input bind:value={title} type="text" placeholder="Заголовок" required />
  </div>
</Modal>

<style>
</style>
