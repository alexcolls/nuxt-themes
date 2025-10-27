import { describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import LayoutFooter from '../../../src/runtime/components/Layout/Footer.vue';

describe('LayoutFooter', () => {
  it('should mount successfully', async () => {
    const component = await mountSuspended(LayoutFooter, {
      global: {
        stubs: {
          UTooltip: true,
          CommonContainer: true,
          LayoutTheme: true,
        },
      },
    });
    expect(component).toBeTruthy();
  });

  it('should render footer element', async () => {
    const component = await mountSuspended(LayoutFooter, {
      global: {
        stubs: {
          UTooltip: true,
          CommonContainer: true,
          LayoutTheme: true,
        },
      },
    });
    expect(component.html()).toContain('footer');
  });

  it('should display copyright year', async () => {
    const component = await mountSuspended(LayoutFooter, {
      global: {
        stubs: {
          UTooltip: true,
          CommonContainer: true,
          LayoutTheme: true,
        },
      },
    });
    const currentYear = new Date().getFullYear();
    expect(component.html()).toContain(currentYear.toString());
  });

  it('should display version from config', async () => {
    const component = await mountSuspended(LayoutFooter, {
      global: {
        stubs: {
          UTooltip: true,
          CommonContainer: true,
          LayoutTheme: true,
        },
      },
    });
    expect(component).toBeTruthy();
  });
});
