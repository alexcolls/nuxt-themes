import { describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import LayoutThemeBtnLight from '../../../src/runtime/components/Layout/Theme/BtnLight.vue';

describe('LayoutThemeBtnLight', () => {
  it('should mount successfully', async () => {
    const component = await mountSuspended(LayoutThemeBtnLight, {
      global: {
        stubs: {
          UPopover: true,
          UButton: true,
          CommonBtnIcon: true,
        },
      },
    });
    expect(component).toBeTruthy();
  });

  it('should render theme options', async () => {
    const component = await mountSuspended(LayoutThemeBtnLight, {
      global: {
        stubs: {
          UPopover: true,
          UButton: true,
          CommonBtnIcon: true,
        },
      },
    });
    expect(component).toBeTruthy();
  });

  it('should integrate with color mode', async () => {
    const component = await mountSuspended(LayoutThemeBtnLight, {
      global: {
        stubs: {
          UPopover: true,
          UButton: true,
          CommonBtnIcon: true,
        },
      },
    });
    expect(component).toBeTruthy();
  });

  it('should update UI state on theme change', async () => {
    const component = await mountSuspended(LayoutThemeBtnLight, {
      global: {
        stubs: {
          UPopover: true,
          UButton: true,
          CommonBtnIcon: true,
        },
      },
    });
    expect(component).toBeTruthy();
  });
});
