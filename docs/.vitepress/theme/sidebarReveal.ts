import { nextTick } from 'vue'

/** Scroll only the left VPSidebar so the active entry is visible (not the page). */
export function scrollSidebarToActive(options?: { behavior?: ScrollBehavior }): void {
  if (typeof document === 'undefined') return
  const sidebar = document.querySelector<HTMLElement>('.VPSidebar')
  if (!sidebar) return

  const active =
    sidebar.querySelector<HTMLElement>('.VPSidebarItem.is-link.is-active') ||
    sidebar.querySelector<HTMLElement>('.VPSidebarItem.is-link.has-active')
  if (!active) return

  const target = active.querySelector<HTMLElement>('.item') || active
  const sidebarRect = sidebar.getBoundingClientRect()
  const targetRect = target.getBoundingClientRect()
  const margin = 12
  const fullyVisible =
    targetRect.top >= sidebarRect.top + margin &&
    targetRect.bottom <= sidebarRect.bottom - margin
  if (fullyVisible) return

  const offset =
    targetRect.top - sidebarRect.top - sidebar.clientHeight / 2 + targetRect.height / 2
  sidebar.scrollTo({
    top: Math.max(0, sidebar.scrollTop + offset),
    behavior: options?.behavior ?? 'smooth',
  })
}

/** Route / layout updates expand collapsed groups first; retry a few frames. */
export function scheduleScrollSidebarToActive(options?: { behavior?: ScrollBehavior }): void {
  const run = () => scrollSidebarToActive(options)
  nextTick(() => {
    requestAnimationFrame(() => {
      run()
      requestAnimationFrame(run)
      window.setTimeout(run, 80)
    })
  })
}
