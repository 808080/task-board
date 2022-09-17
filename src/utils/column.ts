import { writable } from "svelte/store";
import type { Column } from "./types";

const ColumnContext = writable<Column>(null);

export default ColumnContext;
