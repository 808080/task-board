<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import { crossfade } from "svelte/transition";
  import ColumnContext from "../../utils/column";
  import modal from "../../utils/modal";
  import Store from "../../utils/store";
  import type { Column, Task } from "../../utils/types";
  import AddTask from "./AddTask.svelte";
  import Button from "./Button.svelte";
  import Card from "./Card.svelte";
  import EditIcon from "../../assets/i-pen.svg";
  import DeleteIcon from "../../assets/i-bin.svg";
  import EditColumn from "./EditColumn.svelte";
  import DeleteColumn from "./DeleteColumn.svelte";

  export let column: Column;
  export let classList: string = "";
  export let dragStart: (Task: Task) => void;

  $: taskList = $Store.tasks.filter((t) => t.columnId === column.id);

  const modalWithContext = (m: typeof SvelteComponent) => {
    ColumnContext.set(column);
    modal.set(m);
  };

  const handleAddTask = () => modalWithContext(AddTask);

  const handleEditColumn = () => modalWithContext(EditColumn);

  const handleDeleteColumn = () => modalWithContext(DeleteColumn);

  const handleDragStart = (event: DragEvent, task: Task) => {
    dragStart(task);
    const elem = event.target as HTMLElement;
    elem.classList.add("dragged");
  };

  const handleDragEnd = (event: DragEvent) => {
    const elem = event.target as HTMLElement;
    elem.classList.remove("dragged");
  };

  const [send, receive] = crossfade({
    fallback(node) {
      const style = getComputedStyle(node);
      const transform = style.transform === "none" ? "" : style.transform;

      return {
        duration: 200,
        css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`,
      };
    },
  });
</script>

<div class="column {classList}">
  <div class="column__header flex align-c">
    <div class="flex align-c">
      <img src={column.image} alt={column.title} />
      <h5 class="column__title" title={column.title}>{column.title}</h5>
    </div>

    <div>
      <Button
        type="button"
        on:click={handleEditColumn}
        classList="icon-btn mr-10"
      >
        <img src={EditIcon} alt="edit" />
      </Button>
      <Button type="button" on:click={handleDeleteColumn} classList="icon-btn">
        <img src={DeleteIcon} alt="remove column" />
      </Button>
    </div>
  </div>

  <div class="task-list">
    {#each taskList as task (task.id)}
      <div
        in:receive={{ key: task.id }}
        out:send={{ key: task.id }}
        class="task__wrap"
        draggable={true}
        on:dragstart={(e) => handleDragStart(e, task)}
        on:dragend={handleDragEnd}
      >
        <Card {task} />
      </div>
    {/each}
  </div>

  <Button
    text="＋"
    type="button"
    on:click={handleAddTask}
    classList="add-btn"
  />
</div>

<style>
  .column {
    text-align: center;
  }

  .column img {
    pointer-events: none;
  }

  .column__header {
    justify-content: space-between;
    padding: 20px 0;
  }

  .column__title {
    font-size: 14px;
    margin-left: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 215px;
    font-weight: var(--text-medium);
  }

  .task-list {
    display: grid;
    gap: 16px 10px;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  }

  .task__wrap {
    cursor: all-scroll;
    border-radius: 4px;
    overflow: hidden;
  }

  .dragged {
    opacity: 0.3;
  }
</style>
