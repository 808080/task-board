<script lang="ts">
  import ColumnContext from "../../utils/column";
  import modal from "../../utils/modal";
  import Store from "../../utils/store";
  import type { Column } from "../../utils/types";
  import AddTask from "./AddTask.svelte";
  import Button from "./Button.svelte";
  import Card from "./Card.svelte";
  import EditIcon from "../../assets/i-pen.svg";
  import DeleteIcon from "../../assets/i-bin.svg";
  import EditColumn from "./EditColumn.svelte";
  import DeleteColumn from "./DeleteColumn.svelte";
  import type { SvelteComponent } from "svelte";

  export let column: Column;
  export let classList: string = "";
  export let dragStart: (taskIndex: number) => void;

  $: taskList = $Store.tasks.filter((t) => t.columnId === column.id);

  const modalWithContext = (m: typeof SvelteComponent) => {
    ColumnContext.set(column);
    modal.set(m);
  };

  const handleAddTask = () => modalWithContext(AddTask);

  const handleEditColumn = () => modalWithContext(EditColumn);

  const handleDeleteColumn = () => modalWithContext(DeleteColumn);

  const handleDragStart = (event: DragEvent, taskId: number) => {
    dragStart(taskId);
    const elem = event.target as HTMLElement;
    console.log(elem);
    elem.classList.add("yellow");
  };

  const handleDragEnd = (event: DragEvent) => {
    const elem = event.target as HTMLElement;
    elem.classList.remove("yellow");
  };
</script>

<div class={classList}>
  <img src={column.image} alt={column.title} srcset="" />
  <h5>{column.title}</h5>

  <Button type="button" on:click={handleEditColumn}>
    <img src={EditIcon} alt="edit" srcset="" />
  </Button>
  <Button type="button" on:click={handleDeleteColumn}>
    <img src={DeleteIcon} alt="remove column" srcset="" />
  </Button>

  {#each taskList as task (task.id)}
    <div
      draggable={true}
      on:dragstart={(e) => handleDragStart(e, task.id)}
      on:dragend={handleDragEnd}
    >
      <Card {task} />
    </div>
  {/each}

  <Button text="+" type="button" on:click={handleAddTask} />
</div>

<style>
  .yellow {
    color: yellow;
  }
</style>
