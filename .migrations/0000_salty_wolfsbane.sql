CREATE TABLE IF NOT EXISTS "activities" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"time_start" timestamp with time zone NOT NULL,
	"time_end" timestamp with time zone NOT NULL,
	"has_time_to_end" boolean DEFAULT false,
	"status" integer DEFAULT 0,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
