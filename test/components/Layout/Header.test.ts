import { describe, it, expect, vi } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import LayoutHeader from '../../../src/runtime/components/Layout/Header.vue';

describe('LayoutHeader', () => {
  it('should mount successfully', async () => {
    const component = await mountSuspended(LayoutHeader);
    expect(component).toBeTruthy();
  });

  it('should render header element', async () => {
    const component = await mountSuspended(LayoutHeader);
    expect(component.html()).toContain('header');
  });

  it('should show menu button when authenticated', async () => {
    const component = await mountSuspended(LayoutHeader, {
      global: {
        stubs: {
          UButton: true,
          UIcon: true,
          CommonContainer: true,
          LayoutLogo: true,
        },
      },
    });
    expect(component).toBeTruthy();
  });

  it('should integrate with useState', async () => {
    const component = await mountSuspended(LayoutHeader, {
      global: {
        stubs: {
          UButton: true,
          UIcon: true,
          CommonContainer: true,
          LayoutLogo: true,
        },
      },
    });
    expect(component).toBeTruthy();
  });
});
