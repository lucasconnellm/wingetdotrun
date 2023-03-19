import type { Router } from "@wingetdotrun/trpc";
import { ssrLink } from "trpc-svelte-query/ssr";
import { createTRPCSvelte, httpBatchLink } from "trpc-svelte-query";
import superjson from "superjson";

// @ts-ignore
export const trpc = createTRPCSvelte<Router>({
	links: [
		ssrLink(httpBatchLink)({
			url: "######",
		}),
	],
	transformer: superjson,
	queryClientConfig: {
		defaultOptions: {
			queries: {
				retry: false,
			},
		},
	},
});