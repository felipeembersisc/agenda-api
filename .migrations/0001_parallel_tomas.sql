CREATE TABLE IF NOT EXISTS "users" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"active" boolean DEFAULT true,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
