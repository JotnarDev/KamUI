import { describe, it, expect } from 'vitest'
import { existsSync } from 'fs'
import { resolve } from 'path'
import { readFileSync } from 'fs'

// Read package.json
const packageJson = JSON.parse(
    readFileSync(resolve(process.cwd(), 'package.json'), 'utf-8')
)

describe('Package.json Structure', () => {

    describe('Required fields', () => {
        it('should have name field', () => {
            expect(packageJson.name).toBe('kamui')
        })

        it('should have version field', () => {
            expect(packageJson.version).toBeDefined()
            expect(packageJson.version).toMatch(/^\d+\.\d+\.\d+$/)
        })

        it('should have description field', () => {
            expect(packageJson.description).toBeDefined()
            expect(packageJson.description.length).toBeGreaterThan(10)
        })

        it('should have author field', () => {
            expect(packageJson.author).toBeDefined()
        })

        it('should have license field', () => {
            expect(packageJson.license).toBe('MIT')
        })

        it('should have repository field', () => {
            expect(packageJson.repository).toBeDefined()
            expect(packageJson.repository.url).toContain('github.com')
        })
    })

    describe('Exports configuration', () => {
        it('should have exports field', () => {
            expect(packageJson.exports).toBeDefined()
        })

        it('should have main export "."', () => {
            expect(packageJson.exports['.']).toBeDefined()
            expect(packageJson.exports['.']).toBe('./library/index.css')
        })

        it('should have files field', () => {
            expect(packageJson.files).toBeDefined()
            expect(Array.isArray(packageJson.files)).toBe(true)
        })

        it('files should include library folder', () => {
            expect(packageJson.files).toContain('library')
        })

        it('should have style field', () => {
            expect(packageJson.style).toBe('library/index.css')
        })
    })

    describe('Peer dependencies', () => {
        it('should have peerDependencies', () => {
            expect(packageJson.peerDependencies).toBeDefined()
        })

        it('should require Tailwind CSS 4', () => {
            expect(packageJson.peerDependencies.tailwindcss).toBeDefined()
            expect(packageJson.peerDependencies.tailwindcss).toContain('^4')
        })
    })

    describe('Scripts', () => {
        const requiredScripts = ['dev', 'build', 'format', 'format:check']

        requiredScripts.forEach((script) => {
            it(`should have "${script}" script`, () => {
                expect(packageJson.scripts[script]).toBeDefined()
            })
        })
    })

    describe('Keywords for npm search', () => {
        it('should have keywords array', () => {
            expect(packageJson.keywords).toBeDefined()
            expect(Array.isArray(packageJson.keywords)).toBe(true)
        })

        it('should have relevant keywords', () => {
            const keywords = packageJson.keywords
            expect(keywords).toContain('tailwindcss')
            expect(keywords).toContain('vue')
            expect(keywords).toContain('components')
        })
    })
})

describe('Export Paths', () => {

    describe('All exports have matching source files', () => {
        const exports = Object.entries(packageJson.exports)

        exports.forEach(([exportName, exportPath]) => {
            it(`export "${exportName}" should have source file`, () => {
                // Convert library/ to src/library/ for source check
                const sourcePath = exportPath.replace('./library/', './src/library/')
                const fullPath = resolve(process.cwd(), sourcePath)

                expect(existsSync(fullPath)).toBe(true)
            })
        })
    })

    describe('Required component exports', () => {
        const requiredExports = [
            '.',
            './color',
            './buttons',
            './forms',
            './cards',
            './alerts',
            './badges',
            './tables',
            './tabs',
            './modals',
            './dropdowns',
            './popovers',
            './breadcrumbs',
            './avatars',
            './typography',
            './pagination',
            './tooltips',
            './progress',
            './spinners',
            './toasts',
            './accordion',
            './dividers',
            './list-groups',
            './stepper',
        ]

        requiredExports.forEach((exportName) => {
            it(`should export "${exportName}"`, () => {
                expect(packageJson.exports[exportName]).toBeDefined()
            })
        })
    })

    describe('Export path format', () => {
        const exports = Object.entries(packageJson.exports)

        exports.forEach(([exportName, exportPath]) => {
            it(`"${exportName}" path should start with ./library/`, () => {
                expect(exportPath.startsWith('./library/')).toBe(true)
            })

            it(`"${exportName}" path should end with .css`, () => {
                expect(exportPath.endsWith('.css')).toBe(true)
            })
        })
    })
})