# SvelteKit with PostgreSQL on Neon

This is a demo project that connects a SvelteKit application to a PostgreSQL database hosted on [Neon](https://neon.tech/).

<https://neonexample.netlify.app>

## Overview

The project demonstrates how to perform basic database operations such as fetching, adding, and deleting users. It uses the `pg` library to manage the database connection. A SQL file is included to manually set up the `users` table with fields for `id`, `name`, and `created_at`.

This project is very simple. Don't expect anything fancy. It will be used for a tutorial on my channel.

## Setup Instructions

1. Clone the repository.
2. Set the `DB_URL` environment variable with your PostgreSQL connection string. For local development, a local PostgreSQL instance can be used.
3. Use the provided SQL file to manually create the database schema.
4. Start the SvelteKit development server.

## Functionality

-   Fetches a list of users from the database.
-   Adds a new user with a name.
-   Deletes a user by their ID.
