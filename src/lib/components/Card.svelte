<script lang="ts">
  import type { Task } from "../../utils/types";
  import User1 from "../../assets/user1.png";
  import User2 from "../../assets/user2.png";
  import Chevron from "../../assets/chevron.svg";

  export let task: Task;
</script>

<div class="task flex">
  <div class="task__meta flex">
    <div class="task__assignees">
      <img src={User1} alt="" class="task__avatar" />
      <img src={User2} alt="" class="task__avatar" />
    </div>

    <img src={Chevron} alt="" class="task__chevron" />
  </div>

  <p class="task__text">
    #{task.id}: <span class="task__title">{task.text}</span>
  </p>
</div>

<style>
  .task {
    min-height: 118px;
    background-color: #f5f5f5;
    text-align: left;
    max-height: 150px;
    height: 100%;
    pointer-events: none;
  }

  .task__text {
    font-size: 18px;
    padding: 15px 12px;
  }

  .task__title {
    color: var(--text-blue);
    font-weight: var(--text-medium);
  }

  .task__meta {
    width: 64px;
    height: 100%;
    background-color: #efefef;
    padding: 14px 15px;
    flex-direction: column;
  }

  .task__avatar {
    width: 32px;
    display: block;
    margin: auto;
  }

  .task__avatar:not(.task__avatar:first-of-type) {
    margin-top: -50%;
  }

  .task__assignees {
    overflow: hidden;
    margin-bottom: 10px;
  }

  .task__chevron {
    margin-top: auto;
  }
</style>
