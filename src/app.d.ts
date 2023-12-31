// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	interface Error {
		message?: string;
		code?: number;
	}
}

export {};
