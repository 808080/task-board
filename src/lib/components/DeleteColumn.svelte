<script lang="ts">
  import Modal from "./Modal.svelte";
  import modal from "../../utils/modal";
  import Store from "../../utils/store";
  import ColumnContext from "../../utils/column";
  import { onDestroy } from "svelte";

  const onSubmit = (e: MouseEvent) => {
    e.preventDefault();
    Store.removeColumn($ColumnContext.id);
    modal.set(null);
  };

  onDestroy(() => {
    ColumnContext.set(null);
  });
</script>

<Modal
  title="Удалить столбец?"
  {onSubmit}
  cancelText="Нет"
  submitText="Да"
  submitClassList="danger"
/>
