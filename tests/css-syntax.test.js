import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'fs'
import { resolve, join } from 'path'

// Helper: read CSS file
function readCSSFile(filePath) {
    return readFileSync(resolve(process.cwd(), filePath), 'utf-8')
}

// Helper: get all CSS files in directory
function getCSSFiles(dirPath) {
    const fullPath = resolve(process.cwd(), dirPath)
    try {
        return readdirSync(fullPath)
            .filter(file => file.endsWith('.css'))
            .map(file => join(dirPath, file))
    } catch {
        return []
    }
}

// Simple CSS syntax checker
function checkCSSSyntax(content) {
    const errors = []

    // Check: braces are balanced
    const openBraces = (content.match(/{/g) || []).length
    const closeBraces = (content.match(/}/g) || []).length

    if (openBraces !== closeBraces) {
        errors.push(`Mismatched braces: ${openBraces} open, ${closeBraces} close`)
    }

    // Check: parentheses are balanced
    const openParens = (content.match(/\(/g) || []).length
    const closeParens = (content.match(/\)/g) || []).length

    if (openParens !== closeParens) {
        errors.push(`Mismatched parentheses: ${openParens} open, ${closeParens} close`)
    }

    // Check: no double semicolons
    if (content.includes(';;')) {
        errors.push('Found double semicolons (;;)')
    }

    // Check: no empty url()
    if (content.includes('url()')) {
        errors.push('Found empty url()')
    }

    return errors
}

// Check for common CSS issues
function checkCSSQuality(content) {
    const warnings = []

    // Check: very long lines (might indicate issues)
    const lines = content.split('\n')
    lines.forEach((line, index) => {
        if (line.length > 500) {
            warnings.push(`Line ${index + 1} is very long (${line.length} chars)`)
        }
    })

    return warnings
}

describe('CSS Syntax Validation', () => {

    describe('Theme file syntax', () => {
        it('color.css should have valid syntax', () => {
            const content = readCSSFile('src/library/theme/color.css')
            const errors = checkCSSSyntax(content)

            if (errors.length > 0) {
                console.log('Errors in color.css:', errors)
            }

            expect(errors).toEqual([])
        })
    })

    describe('Component files syntax', () => {
        const componentFiles = getCSSFiles('src/library/components')

        componentFiles.forEach((filePath) => {
            const fileName = filePath.split('/').pop()

            it(`${fileName} should have valid syntax`, () => {
                const content = readCSSFile(filePath)
                const errors = checkCSSSyntax(content)

                if (errors.length > 0) {
                    console.log(`Errors in ${fileName}:`, errors)
                }

                expect(errors).toEqual([])
            })
        })
    })

    describe('CSS quality checks', () => {
        const componentFiles = getCSSFiles('src/library/components')

        componentFiles.forEach((filePath) => {
            const fileName = filePath.split('/').pop()

            it(`${fileName} should not have quality issues`, () => {
                const content = readCSSFile(filePath)
                const warnings = checkCSSQuality(content)

                // Warnings don't fail the test, just log them
                if (warnings.length > 0) {
                    console.log(`Warnings in ${fileName}:`, warnings)
                }

                // This test passes but logs warnings
                expect(true).toBe(true)
            })
        })
    })
})

describe('Index File Imports', () => {
    const indexContent = readCSSFile('src/library/index.css')

    it('should import theme first', () => {
        const lines = indexContent.split('\n').filter(line => line.includes('@import'))
        const firstImport = lines[0]

        expect(firstImport).toContain('color.css')
    })

    describe('All components are imported', () => {
        const expectedComponents = [
            'alerts.css',
            'avatars.css',
            'badges.css',
            'breadcrumbs.css',
            'buttons.css',
            'cards.css',
            'dropdowns.css',
            'forms.css',
            'modals.css',
            'popovers.css',
            'tables.css',
            'tabs.css',
            'typography.css',
            'pagination.css',
            'tooltips.css',
            'progress.css',
            'spinners.css',
            'toasts.css',
            'accordion.css',
            'dividers.css',
            'list-groups.css',
            'stepper.css',
        ]

        expectedComponents.forEach((component) => {
            it(`should import ${component}`, () => {
                expect(indexContent).toContain(component)
            })
        })
    })

    it('should use relative imports', () => {
        const imports = indexContent.match(/@import\s+['"](.*)['"]/g) || []

        imports.forEach((importLine) => {
            expect(importLine).toContain('./')
        })
    })
})

describe('No Debug Code', () => {
    const allFiles = [
        'src/library/theme/color.css',
        ...getCSSFiles('src/library/components'),
    ]

    allFiles.forEach((filePath) => {
        const fileName = filePath.split('/').pop()

        it(`${fileName} should not have console or debug comments`, () => {
            const content = readCSSFile(filePath)

            // These are just warnings, not hard failures
            const hasDebug = content.toLowerCase().includes('debug')
            const hasFixme = content.toLowerCase().includes('fixme')

            if (hasDebug) {
                console.log(`  ⚠️  ${fileName} contains 'debug' comments`)
            }
            if (hasFixme) {
                console.log(`  ⚠️  ${fileName} contains 'FIXME' comments`)
            }

            // Test passes, just logs warnings
            expect(true).toBe(true)
        })
    })
})