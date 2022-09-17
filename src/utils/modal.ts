import type { SvelteComponent } from 'svelte';
import { writable } from 'svelte/store';

const modal = writable<typeof SvelteComponent>(null);

export default modal;