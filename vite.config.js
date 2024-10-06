import { defineConfig } from 'vite';

export default defineConfig({
    define: {
        'process.env.SHOW_TEST_TAG': JSON.stringify(process.env.SHOW_TEST_TAG),
    },
});