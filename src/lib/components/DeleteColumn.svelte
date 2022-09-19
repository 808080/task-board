<script lang="ts">
  import Modal from "./Modal.svelte";
  import modal from "../../utils/modal";
  import Store from "../../utils/store";
  import ColumnContext from "../../utils/column";

  const onSubmit = (e: MouseEvent) => {
    e.preventDefault();
    Store.removeColumn($ColumnContext.id);
    modal.set(null);
  };
</script>

<Modal
  title="Удалить столбец?"
  {onSubmit}
  cancelText="Нет"
  submitText="Да"
  submitClassList="danger"
/>
