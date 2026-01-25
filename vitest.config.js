import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        // Environment
        environment: 'node',

        // Test files
        include: ['tests/**/*.test.js'],
        exclude: ['node_modules', 'dist', 'library'],

        // Setup file (runs before each test file)
        setupFiles: ['./tests/setup.js'],

        // Reporter
        reporters: ['verbose'],

        // Parallel execution
        pool: 'threads',

        // Timeouts
        testTimeout: 10000,
        hookTimeout: 10000,

        // Don't fail on first error
        bail: 0,

        // Globals (optional - allows using describe, it, expect without imports)
        globals: false,

        // Coverage
        coverage: {
            enabled: false,
            provider: 'v8',
            include: ['src/library/**/*.css'],
            reportsDirectory: './coverage',
            reporter: ['text', 'html', 'json'],
        },
    },
})