<script lang="ts">
  import Modal from "./Modal.svelte";
  import Icon1 from "../../assets/i-pin.svg";
  import Icon2 from "../../assets/i-play.svg";
  import Icon3 from "../../assets/i-done.svg";
  import Icon4 from "../../assets/i-deployed.svg";
  import modal from "../../utils/modal";
  import Store from "../../utils/store";

  const icons = [Icon1, Icon2, Icon3, Icon4];

  let selectedIcon = icons[0];
  let title = "";

  const onSubmit = (e: MouseEvent) => {
    e.preventDefault();
    if (!title) return;

    Store.addColumn(title, selectedIcon);
    modal.set(null);
  };
</script>

<Modal title="Новый столбец" {onSubmit}>
  <div>
    {#each icons as icon}
      <label>
        <input
          type="radio"
          bind:group={selectedIcon}
          name="icon"
          value={icon}
        />
        <img src={icon} alt={icon} srcset="" />
      </label>
    {/each}

    <input bind:value={title} placeholder="Название столбца" required />
  </div>
</Modal>

<!-- <style>
</style> -->
