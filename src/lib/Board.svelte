<script lang="ts">
  import modal from "../utils/modal";
  import Store from "../utils/store";
  import AddColumn from "./components/AddColumn.svelte";
  import Button from "./components/Button.svelte";
  import Column from "./components/Column.svelte";
  import PlayIcon from "../assets/i-play-red.svg";
  import WaveIcon from "../assets/i-wave.svg";
  import type { Task } from "src/utils/types";

  const handleClick = () => modal.set(AddColumn);

  let hoveringColumnId: number;
  let initColumnId: number;
  let taskId: number;
  let timeout: number;

  const dragStart = (task: Task) => {
    taskId = task.id;
    initColumnId = task.columnId;
  };

  const drop = () => {
    if (initColumnId !== hoveringColumnId) {
      const taskIndex = $Store.tasks.findIndex((t) => t.id === taskId);
      const [task] = $Store.tasks.splice(taskIndex, 1);
      task.columnId = hoveringColumnId;
      $Store.tasks.push(task);
      Store.update((store) => store);
    }
    clearTimeout(timeout);
    hoveringColumnId = null;
  };

  const handleDragEnter = (columnId: number) => {
    if (columnId === hoveringColumnId) return;
    hoveringColumnId = columnId;
  };
</script>

<div>
  <div class="entity__header flex align-c">
    <h2 class="entity__title">Проекты</h2>
    <img src={PlayIcon} alt="" />
    <p class="breadcrumbs">
      <span class="text-light">CRM - система /</span> Процессы
    </p>
  </div>

  <div class="board__header flex align-c">
    <div class="flex">
      <img src={WaveIcon} alt="" />
      <h4 class="board__title text-medium">Процессы проекта CRM - система</h4>
    </div>
    <Button
      text="Добавить столбец"
      type="button"
      classList="btn"
      on:click={handleClick}
    />
  </div>

  <hr class="divider" />

  <div class="board__columns flex">
    {#each $Store.columns as column (column.id)}
      <section
        class="column__wrap"
        class:drag-over={hoveringColumnId === column.id}
        on:dragover={() => {
          clearTimeout(timeout);
          handleDragEnter(column.id);
        }}
        on:dragend={drop}
        on:dragleave={() => {
          clearTimeout(timeout);
          timeout = setTimeout((_) => (hoveringColumnId = initColumnId), 100);
        }}
      >
        <Column {column} {dragStart} />
      </section>
    {/each}
  </div>
</div>

<style>
  .entity__header {
    margin-bottom: 40px;
  }

  .entity__title {
    margin-right: 21px;
  }

  .board__title,
  .breadcrumbs {
    margin-left: 8px;
  }

  .board__header,
  .entity__header {
    padding: 0 20px;
  }

  .board__header {
    justify-content: space-between;
  }

  .divider {
    border: none;
    margin: 15px 20px;
    border-top: solid 1px #e9e9e9;
  }

  .board__columns {
    overflow-x: auto;
  }

  .column__wrap {
    padding: 0 20px;
    border-radius: 7px;
    flex: 1;
    max-width: 1110px;
  }

  .drag-over {
    background-color: #ffe8be;
  }
</style>
