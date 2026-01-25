import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'
import { resolve } from 'path'

// Helper: read CSS file
function readCSSFile(filePath) {
    return readFileSync(resolve(process.cwd(), filePath), 'utf-8')
}

// Helper: check if class exists in CSS content
function hasClass(content, className) {
    // Match .className followed by space, {, comma, or :
    const regex = new RegExp(`\\.${className}[\\s{,:\\[]`, 'g')
    return regex.test(content)
}

// Helper: get all classes from CSS content
function getAllClasses(content) {
    const regex = /\.([a-zA-Z][a-zA-Z0-9_-]*)/g
    const matches = content.match(regex) || []
    return [...new Set(matches.map(m => m.slice(1)))]
}

describe('Button Classes', () => {
    const content = readCSSFile('src/library/components/buttons.css')

    const requiredClasses = [
        'button',
        'button-primary',
        'button-secondary',
        'button-ghost',
    ]

    requiredClasses.forEach((className) => {
        it(`should have .${className} class`, () => {
            expect(hasClass(content, className)).toBe(true)
        })
    })

    it('should have size variants', () => {
        const classes = getAllClasses(content)
        const hasSizes = classes.some(c => c.includes('button-sm') || c.includes('button-lg'))
        expect(hasSizes).toBe(true)
    })
})

describe('Card Classes', () => {
    const content = readCSSFile('src/library/components/cards.css')

    const requiredClasses = [
        'card',
        'card-header',
        'card-body',
        'card-footer',
    ]

    requiredClasses.forEach((className) => {
        it(`should have .${className} class`, () => {
            expect(hasClass(content, className)).toBe(true)
        })
    })
})

describe('Form Classes', () => {
    const content = readCSSFile('src/library/components/forms.css')

    const requiredClasses = [
        'form-input',
        'form-label',
    ]

    requiredClasses.forEach((className) => {
        it(`should have .${className} class`, () => {
            expect(hasClass(content, className)).toBe(true)
        })
    })

    it('should have state classes', () => {
        const classes = getAllClasses(content)
        const hasStates = classes.some(c =>
            c.includes('success') || c.includes('error')
        )
        expect(hasStates).toBe(true)
    })
})

describe('Alert Classes', () => {
    const content = readCSSFile('src/library/components/alerts.css')

    const requiredClasses = [
        'alert',
        'alert-success',
        'alert-warning',
        'alert-error',
        'alert-info',
    ]

    requiredClasses.forEach((className) => {
        it(`should have .${className} class`, () => {
            expect(hasClass(content, className)).toBe(true)
        })
    })
})

describe('Badge Classes', () => {
    const content = readCSSFile('src/library/components/badges.css')

    const requiredClasses = [
        'badge',
        'badge-success',
        'badge-warning',
        'badge-error',
    ]

    requiredClasses.forEach((className) => {
        it(`should have .${className} class`, () => {
            expect(hasClass(content, className)).toBe(true)
        })
    })
})

describe('Table Classes', () => {
    const content = readCSSFile('src/library/components/tables.css')

    const requiredClasses = [
        'table',
        'table-row',
        'table-cell',
    ]

    requiredClasses.forEach((className) => {
        it(`should have .${className} class`, () => {
            expect(hasClass(content, className)).toBe(true)
        })
    })
})

describe('Tab Classes', () => {
    const content = readCSSFile('src/library/components/tabs.css')

    const requiredClasses = [
        'tabs',
        'tab',
        'tab-active',
    ]

    requiredClasses.forEach((className) => {
        it(`should have .${className} class`, () => {
            expect(hasClass(content, className)).toBe(true)
        })
    })
})

describe('Modal Classes', () => {
    const content = readCSSFile('src/library/components/modals.css')

    it('should have .modal class', () => {
        expect(hasClass(content, 'modal')).toBe(true)
    })
})

describe('Dropdown Classes', () => {
    const content = readCSSFile('src/library/components/dropdowns.css')

    const requiredClasses = [
        'dropdown',
        'dropdown-menu',
        'dropdown-item',
    ]

    requiredClasses.forEach((className) => {
        it(`should have .${className} class`, () => {
            expect(hasClass(content, className)).toBe(true)
        })
    })
})

describe('Avatar Classes', () => {
    const content = readCSSFile('src/library/components/avatars.css')

    it('should have .avatar class', () => {
        expect(hasClass(content, 'avatar')).toBe(true)
    })
})

describe('Breadcrumb Classes', () => {
    const content = readCSSFile('src/library/components/breadcrumbs.css')

    it('should have .breadcrumb class', () => {
        expect(hasClass(content, 'breadcrumb')).toBe(true)
    })
})

describe('Popover Classes', () => {
    const content = readCSSFile('src/library/components/popovers.css')

    it('should have .popover class', () => {
        expect(hasClass(content, 'popover')).toBe(true)
    })
})

describe('Typography Classes', () => {
    const content = readCSSFile('src/library/components/typography.css')

    it('should have typography-related classes', () => {
        const classes = getAllClasses(content)
        expect(classes.length).toBeGreaterThan(0)
    })
})

describe('Pagination Classes', () => {
    const content = readCSSFile('src/library/components/pagination.css')

    it('should have .pagination class', () => {
        expect(hasClass(content, 'pagination')).toBe(true)
    })
})

describe('Tooltip Classes', () => {
    const content = readCSSFile('src/library/components/tooltips.css')

    it('should have .tooltip class', () => {
        expect(hasClass(content, 'tooltip')).toBe(true)
    })
})

describe('Progress Classes', () => {
    const content = readCSSFile('src/library/components/progress.css')

    it('should have .progress class', () => {
        expect(hasClass(content, 'progress')).toBe(true)
    })
})

describe('Spinner Classes', () => {
    const content = readCSSFile('src/library/components/spinners.css')

    it('should have .spinner class', () => {
        expect(hasClass(content, 'spinner')).toBe(true)
    })
})

describe('Toast Classes', () => {
    const content = readCSSFile('src/library/components/toasts.css')

    it('should have .toast class', () => {
        expect(hasClass(content, 'toast')).toBe(true)
    })
})

describe('Accordion Classes', () => {
    const content = readCSSFile('src/library/components/accordion.css')

    it('should have .accordion class', () => {
        expect(hasClass(content, 'accordion')).toBe(true)
    })
})

describe('Divider Classes', () => {
    const content = readCSSFile('src/library/components/dividers.css')

    it('should have .divider class', () => {
        expect(hasClass(content, 'divider')).toBe(true)
    })
})

describe('List Group Classes', () => {
    const content = readCSSFile('src/library/components/list-groups.css')

    it('should have list-group related classes', () => {
        const classes = getAllClasses(content)
        const hasListGroup = classes.some(c => c.includes('list'))
        expect(hasListGroup).toBe(true)
    })
})

describe('Stepper Classes', () => {
    const content = readCSSFile('src/library/components/stepper.css')

    it('should have .stepper class', () => {
        expect(hasClass(content, 'stepper')).toBe(true)
    })
})