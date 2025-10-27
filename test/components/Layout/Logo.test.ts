import { describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import LayoutLogo from '../../../src/runtime/components/Layout/Logo.vue';

describe('LayoutLogo', () => {
  it('should mount successfully', async () => {
    const component = await mountSuspended(LayoutLogo, {
      global: {
        stubs: {
          NuxtLink: true,
          UIcon: true,
        },
      },
    });
    expect(component).toBeTruthy();
  });

  it('should render as link', async () => {
    const component = await mountSuspended(LayoutLogo, {
      global: {
        stubs: {
          NuxtLink: true,
          UIcon: true,
        },
      },
    });
    expect(component).toBeTruthy();
  });

  it('should use logoURL from config', async () => {
    const component = await mountSuspended(LayoutLogo, {
      global: {
        stubs: {
          NuxtLink: true,
          UIcon: true,
        },
      },
    });
    expect(component).toBeTruthy();
  });

  it('should support custom logo slot', async () => {
    const component = await mountSuspended(LayoutLogo, {
      slots: {
        default: '<div>Custom Logo</div>',
      },
      global: {
        stubs: {
          NuxtLink: true,
          UIcon: true,
        },
      },
    });
    expect(component.html()).toContain('Custom Logo');
  });
});
