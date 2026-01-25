import { describe, it, expect } from 'vitest'
import { fileExists, readFile, getCSSFiles } from './helpers.js'

describe('Library Files', () => {

    describe('Main entry point', () => {
        it('should have index.css file', () => {
            expect(fileExists('src/library/index.css')).toBe(true)
        })

        it('index.css should not be empty', () => {
            const content = readFile('src/library/index.css')
            expect(content.length).toBeGreaterThan(0)
        })

        it('index.css should import theme', () => {
            const content = readFile('src/library/index.css')
            expect(content).toContain('color.css')
        })
    })

    describe('Theme files', () => {
        it('should have color.css file', () => {
            expect(fileExists('src/library/theme/color.css')).toBe(true)
        })

        it('color.css should not be empty', () => {
            const content = readFile('src/library/theme/color.css')
            expect(content.length).toBeGreaterThan(0)
        })

        it('color.css should contain @theme directive', () => {
            const content = readFile('src/library/theme/color.css')
            expect(content).toContain('@theme')
        })

        it('color.css should have dark mode styles', () => {
            const content = readFile('src/library/theme/color.css')
            expect(content).toContain('prefers-color-scheme: dark')
        })
    })

    describe('Component files exist', () => {
        const components = [
            'alerts',
            'avatars',
            'badges',
            'breadcrumbs',
            'buttons',
            'cards',
            'dropdowns',
            'forms',
            'modals',
            'popovers',
            'tables',
            'tabs',
            'typography',
            'pagination',
            'tooltips',
            'progress',
            'spinners',
            'toasts',
            'accordion',
            'dividers',
            'list-groups',
            'stepper',
        ]

        components.forEach((component) => {
            it(`should have ${component}.css file`, () => {
                expect(fileExists(`src/library/components/${component}.css`)).toBe(true)
            })
        })
    })

    describe('Component files are not empty', () => {
        const cssFiles = getCSSFiles('src/library/components')

        cssFiles.forEach((filePath) => {
            const fileName = filePath.split('/').pop()

            it(`${fileName} should not be empty`, () => {
                const content = readFile(filePath)
                expect(content.length).toBeGreaterThan(0)
            })
        })
    })

    describe('Required project files', () => {
        const requiredFiles = [
            'package.json',
            'README.md',
            'LICENSE',
            'vite.config.js',
            '.gitignore',
        ]

        requiredFiles.forEach((file) => {
            it(`should have ${file}`, () => {
                expect(fileExists(file)).toBe(true)
            })
        })
    })

    describe('Documentation files', () => {
        const docFiles = [
            'CONTRIBUTING.md',
            'CHANGELOG.md',
            'CODE_OF_CONDUCT.md',
        ]

        docFiles.forEach((file) => {
            it(`should have ${file}`, () => {
                expect(fileExists(file)).toBe(true)
            })
        })
    })
})