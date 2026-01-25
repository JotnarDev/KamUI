/**
 * Test Helper Functions
 * Reusable utilities for all test files
 */

import { existsSync, readFileSync, readdirSync } from 'fs'
import { resolve, join } from 'path'

/**
 * Check if a file exists
 * @param {string} filePath - Path relative to project root
 * @returns {boolean}
 */
export function fileExists(filePath) {
    return existsSync(resolve(process.cwd(), filePath))
}

/**
 * Read file content as string
 * @param {string} filePath - Path relative to project root
 * @returns {string}
 */
export function readFile(filePath) {
    return readFileSync(resolve(process.cwd(), filePath), 'utf-8')
}

/**
 * Read and parse JSON file
 * @param {string} filePath - Path relative to project root
 * @returns {object}
 */
export function readJSON(filePath) {
    const content = readFile(filePath)
    return JSON.parse(content)
}

/**
 * Get all files with specific extension in a directory
 * @param {string} dirPath - Directory path relative to project root
 * @param {string} extension - File extension (e.g., '.css')
 * @returns {string[]} Array of file paths
 */
export function getFilesWithExtension(dirPath, extension) {
    const fullPath = resolve(process.cwd(), dirPath)

    if (!existsSync(fullPath)) {
        return []
    }

    return readdirSync(fullPath)
        .filter((file) => file.endsWith(extension))
        .map((file) => join(dirPath, file))
}

/**
 * Get all CSS files in a directory
 * @param {string} dirPath - Directory path
 * @returns {string[]}
 */
export function getCSSFiles(dirPath) {
    return getFilesWithExtension(dirPath, '.css')
}

/**
 * Check if a CSS class exists in content
 * @param {string} content - CSS content
 * @param {string} className - Class name without dot
 * @returns {boolean}
 */
export function hasClass(content, className) {
    const regex = new RegExp(`\\.${escapeRegex(className)}[\\s{,:\\[]`, 'g')
    return regex.test(content)
}

/**
 * Get all CSS class names from content
 * @param {string} content - CSS content
 * @returns {string[]}
 */
export function getAllClasses(content) {
    const regex = /\.([a-zA-Z][a-zA-Z0-9_-]*)/g
    const matches = content.match(regex) || []
    return [...new Set(matches.map((m) => m.slice(1)))]
}

/**
 * Extract CSS variables from content
 * @param {string} content - CSS content
 * @returns {string[]}
 */
export function extractCSSVariables(content) {
    const regex = /--([a-zA-Z0-9-]+):/g
    const matches = content.match(regex) || []
    return matches.map((m) => '--' + m.slice(2, -1))
}

/**
 * Check CSS syntax for common errors
 * @param {string} content - CSS content
 * @returns {string[]} Array of error messages
 */
export function checkCSSSyntax(content) {
    const errors = []

    // Check balanced braces
    const openBraces = (content.match(/{/g) || []).length
    const closeBraces = (content.match(/}/g) || []).length
    if (openBraces !== closeBraces) {
        errors.push(`Mismatched braces: ${openBraces} open, ${closeBraces} close`)
    }

    // Check balanced parentheses
    const openParens = (content.match(/\(/g) || []).length
    const closeParens = (content.match(/\)/g) || []).length
    if (openParens !== closeParens) {
        errors.push(
            `Mismatched parentheses: ${openParens} open, ${closeParens} close`
        )
    }

    // Check for double semicolons
    if (content.includes(';;')) {
        errors.push('Found double semicolons (;;)')
    }

    // Check for empty url()
    if (content.includes('url()')) {
        errors.push('Found empty url()')
    }

    return errors
}

/**
 * Escape special regex characters
 * @param {string} string
 * @returns {string}
 */
function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}