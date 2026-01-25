/**
 * Test Setup File
 * This file runs before each test file
 */

import { beforeAll, afterAll, beforeEach, afterEach } from 'vitest'

// Global variables for tests
global.PROJECT_ROOT = process.cwd()

// Before all tests run
beforeAll(() => {
    console.log('\n🧪 Starting KamUI tests...\n')
})

// After all tests complete
afterAll(() => {
    console.log('\n✅ All tests completed!\n')
})

// Before each individual test
beforeEach(() => {
    // Reset any state if needed
})

// After each individual test
afterEach(() => {
    // Cleanup if needed
})