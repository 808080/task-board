<script lang="ts">
  import Modal from "./Modal.svelte";
  import Icon1 from "../../assets/i-pin.svg";
  import Icon2 from "../../assets/i-play.svg";
  import Icon3 from "../../assets/i-done.svg";
  import Icon4 from "../../assets/i-deployed.svg";
  import modal from "../../utils/modal";
  import Store from "../../utils/store";
  import ColumnContext from "../../utils/column";
  import { onDestroy } from "svelte";

  const icons = [Icon1, Icon2, Icon3, Icon4];

  let image = $ColumnContext.image;
  let title = $ColumnContext.title;

  const onSubmit = (e: MouseEvent) => {
    e.preventDefault();
    title = title.trim();
    if (!title) return;

    Store.updateColumn({ id: $ColumnContext.id, title, image });
    modal.set(null);
  };

  onDestroy(() => {
    ColumnContext.set(null);
  });
</script>

<Modal title="Изменить столбец" {onSubmit} submitText="Применить">
  <div>
    <div class="icons-wrap">
      {#each icons as icon}
        <label class="radio-icon" class:selected={image === icon}>
          <input type="radio" bind:group={image} name="icon" value={icon} />
          <img src={icon} alt={icon} />
        </label>
      {/each}
    </div>

    <input
      bind:value={title}
      type="text"
      placeholder="Название столбца"
      required
    />
  </div>
</Modal>
