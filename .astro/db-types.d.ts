// This file is generated by Astro DB
declare module 'astro:db' {
	export const Timestamps: import("@astrojs/db/runtime").Table<
		"Timestamps",
		{"id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Timestamps","primaryKey":true}},"createdAt":{"type":"date","schema":{"optional":false,"unique":false,"deprecated":false,"name":"createdAt","collection":"Timestamps","default":{"__serializedSQL":true,"sql":"CURRENT_TIMESTAMP"}}},"updatedAt":{"type":"date","schema":{"optional":false,"unique":false,"deprecated":false,"name":"updatedAt","collection":"Timestamps","default":{"__serializedSQL":true,"sql":"CURRENT_TIMESTAMP"}}}}
	>;
}
